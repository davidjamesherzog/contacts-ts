'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Watch less files and recompile
   */
  return function () {
    gulp.watch([config.allless], ['build:styles']);
  };
};
