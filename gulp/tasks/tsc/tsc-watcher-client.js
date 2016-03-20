'use strict';

module.exports = function (gulp, config, plugins) {

  return function () {
    return gulp.watch(config.ts.clientts, ['tsc:client']);
  };
};
