'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Remove all files from the build, temp, and reports folders
   * @param  {Function} done - callback when complete
   */
  return function (done) {
    var delconfig = [].concat(config.build, config.temp, config.report);
    plugins.utils.log('Cleaning: ' + plugins.util.colors.blue(delconfig));
    plugins.del(delconfig, done);
  };
};
