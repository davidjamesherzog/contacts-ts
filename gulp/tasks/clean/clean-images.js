'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Remove all images from the build folder
   * @param  {Function} done - callback when complete
   */
  return function (done) {
    return plugins.utils.clean(config.build + 'images/**/*.*', done);
  };
};
