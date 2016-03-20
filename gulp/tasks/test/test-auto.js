'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Run specs and wait.
   * Watch for file changes and re-run tests on each change
   * To start servers and run midway specs as well:
   *    gulp autotest --startServers
   */
  return {
    deps: ['build:vet', 'build:templatecache'],
    fn: function (done) {
      plugins.utils.startTests(false /*singleRun*/, done);
    }
  };
};
