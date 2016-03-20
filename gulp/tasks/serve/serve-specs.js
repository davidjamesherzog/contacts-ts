'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Run the spec runner
   * @return {Stream}
   */
  return {
    deps: ['build:specs'],
    fn: function (done) {
      plugins.utils.log('run the spec runner');
      plugins.utils.serve(true /* isDev */, true /* specRunner */);
      done();
    }
  };
};
