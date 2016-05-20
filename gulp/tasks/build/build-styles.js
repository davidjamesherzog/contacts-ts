'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Compile less to css
   * @return {Stream}
   */
  return {
    deps: ['clean:styles'],
    fn: function () {
      plugins.utils.log('Compiling Less --> CSS');

      return gulp
        .src(config.less)
        .pipe(plugins.plumber()) // exit gracefully if something fails after this
        .pipe(plugins.less())
        //        .on('error', errorLogger) // more verbose and dupe output. requires emit.
        .pipe(plugins.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.temp));
    }
  };
};
