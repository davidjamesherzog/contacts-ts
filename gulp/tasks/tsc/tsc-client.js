'use strict';

module.exports = function (gulp, config, plugins) {

  return function (done) {
    return plugins.utils.runTSC('src/client', done);
  };
};
