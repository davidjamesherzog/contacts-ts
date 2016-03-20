'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Compiles *.js files, sourcemaps,
   */
  return {
    deps: ['tsc:client', 'tsc:server']
  };
};
