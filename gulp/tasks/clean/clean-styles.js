'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Remove all styles from the build and temp folders
   * @param  {Function} done - callback when complete
   */
  return function (done) {
    var files = [].concat(
      config.temp + '**/*.css',
      config.build + 'styles/**/*.css'
    );
    return plugins.utils.clean(files, done);
  };
};
