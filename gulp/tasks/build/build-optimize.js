'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Optimize all files, move to a build folder,
   * and inject them into the new index.html
   * @return {Stream}
   */
  return {
    deps: ['build:inject', 'test:single'],
    fn: function () {
      plugins.utils.log('Optimizing the js, css, and html');

      var assets = plugins.useref.assets({searchPath: './'});
      // Filters are named for the gulp-useref path
      var cssFilter = plugins.filter('**/*.css');
      var jsAppFilter = plugins.filter('**/' + config.optimized.app);
      var jslibFilter = plugins.filter('**/' + config.optimized.lib);

      var templateCache = config.temp + config.templateCache.file;

      return gulp
        .src(config.index)
        .pipe(plugins.plumber())
        .pipe(plugins.utils.inject(templateCache, 'templates'))
        .pipe(assets) // Gather all assets from the html with useref
        // Get the css
        .pipe(cssFilter)
        .pipe(plugins.csso())
        .pipe(cssFilter.restore())
        // Get the custom javascript
        .pipe(jsAppFilter)
        //.pipe(plugins.ngAnnotate({add: true}))
        .pipe(plugins.uglify())
        .pipe(plugins.utils.getHeader())
        .pipe(jsAppFilter.restore())
        // Get the vendor javascript
        .pipe(jslibFilter)
        .pipe(plugins.uglify()) // another option is to override wiredep to use min files
        .pipe(jslibFilter.restore())
        // Take inventory of the file names for future rev numbers
        .pipe(plugins.rev())
        // Apply the concat and file replacement with useref
        .pipe(assets.restore())
        .pipe(plugins.useref())
        // Replace the file names in the html with rev numbers
        .pipe(plugins.revReplace())
        .pipe(gulp.dest(config.build));
    }
  };
};
