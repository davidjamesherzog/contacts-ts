'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Build everything
   * This is separate so we can run tests on
   * optimize before handling image or fonts
   */
  return {
    deps: ['build:optimize', 'build:images', 'build:fonts'],
    fn: function () {
      plugins.utils.log('Building everything');

      var msg = {
        title: 'gulp build',
        subtitle: 'Deployed to the build folder',
        message: 'Running `gulp serve-build`'
      };
      plugins.del(config.temp);
      plugins.utils.log(msg);
      plugins.utils.notify(msg);
    }
  };
};
