'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Inject all the spec files into the specs.html
   * @return {Stream}
   */
  return {
    deps: ['build:wiredep', 'build:styles', 'build:templatecache'],
    fn: function () {
      plugins.utils.log('Wire up css into the html, after files are ready');

      return gulp
        .src(config.index)
        .pipe(plugins.utils.inject(config.css))
        .pipe(gulp.dest(config.client));
    }
  };
};
