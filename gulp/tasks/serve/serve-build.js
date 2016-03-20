'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * serve the build environment
   * --debug-brk or --debug
   * --nosync
   */
  return {
    deps: ['build'],
    fn: function () {
      plugins.utils.serve(false /*isDev*/);
    }
  };
};
