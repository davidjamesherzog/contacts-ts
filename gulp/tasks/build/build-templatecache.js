'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Create $templateCache from the html templates
   * @return {Stream}
   */
  return {
    deps: ['clean:code'],
    fn: function () {
      plugins.utils.log('Creating an AngularJS $templateCache');

      return gulp
        .src(config.htmltemplates)
        .pipe(plugins.if(plugins.args.verbose, plugins.bytediff.start()))
        .pipe(plugins.minifyHtml({empty: true}))
        .pipe(plugins.if(plugins.args.verbose, plugins.bytediff.stop(plugins.utils.bytediffFormatter)))
        .pipe(plugins.angularTemplatecache(
          config.templateCache.file,
          config.templateCache.options
        ))
        .pipe(gulp.dest(config.temp));
    }
  };
};
