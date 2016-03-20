'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Remove all js and html from the build and temp folders
   * @param  {Function} done - callback when complete
   */
  return function (done) {
    var files = [].concat(
      config.temp + '**/*.js',
      config.build + 'js/**/*.js',
      config.build + '**/*.html'
    );
    return plugins.utils.clean(files, done);
  };
};
