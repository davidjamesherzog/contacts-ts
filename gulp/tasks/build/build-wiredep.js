'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Wire-up the bower dependencies
   * @return {Stream}
   */
  return {
    deps: ['tsc'],
    fn: function () {
      plugins.utils.log('Wiring the bower dependencies into the html');

      var wiredep = require('wiredep').stream;
      var options = config.getWiredepDefaultOptions();

      // Only include stubs if flag is enabled
      var js = plugins.args.stubs ? [].concat(config.js, config.stubsjs) : config.js;

      return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe(plugins.utils.inject(js, '', config.jsOrder))
        .pipe(gulp.dest(config.client));
    }

  };
};
