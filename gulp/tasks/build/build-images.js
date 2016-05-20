'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Compress images
   * @return {Stream}
   */
  return {
    deps: ['clean:images'],
    fn: function () {
      plugins.utils.log('Compressing and copying images');

      return gulp
        .src(config.images)
        .pipe(plugins.imagemin({optimizationLevel: 4}))
        .pipe(gulp.dest(config.build + 'images'));
    }
  };
};
