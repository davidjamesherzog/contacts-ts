'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * serve the dev environment
   * --debug-brk or --debug
   * --nosync
   */
  return {
    deps: ['build:inject', 'tsc:watcher'],
    fn: function () {
      plugins.utils.serve(true /*isDev*/);
    }
  };
};
