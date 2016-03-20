'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Watch TypeScript and recompile
   */
  return {
    deps: ['tsc:watcher:client', 'tsc:watcher:server']
  };
};
