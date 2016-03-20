'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Run specs once and exit
   * To start servers and run midway specs as well:
   *    gulp test --startServers
   * @return {Stream}
   */
  return {
    deps: ['build:vet', 'tsc', 'build:templatecache'],
    fn: function (done) {
      plugins.utils.startTests(true /*singleRun*/, done);
    }
  };
};
