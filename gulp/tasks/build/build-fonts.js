'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Copy fonts
   * @return {Stream}
   */
  return {
    deps: ['clean:fonts'],
    fn: function () {
      plugins.utils.log('Copying fonts');

      return gulp
        .src(config.fonts)
        .pipe(gulp.dest(config.build + 'fonts'));
    }
  };
};
