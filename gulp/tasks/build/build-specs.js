'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Inject all the spec files into the specs.html
   * @return {Stream}
   */
  return {
    deps: ['build:templatecache'],
    fn: function () {
      plugins.utils.log('building the spec runner');

      var wiredep = require('wiredep').stream;
      var templateCache = config.temp + config.templateCache.file;
      var options = config.getWiredepDefaultOptions();
      var specs = config.specs;

      if (plugins.args.startServers) {
        specs = [].concat(specs, config.serverIntegrationSpecs);
      }
      options.devDependencies = true;

      return gulp
        .src(config.specRunner)
        .pipe(wiredep(options))
        .pipe(plugins.utils.inject(config.js, '', config.jsOrder))
        .pipe(plugins.utils.inject(config.testlibraries, 'testlibraries'))
        .pipe(plugins.utils.inject(config.specHelpers, 'spechelpers'))
        .pipe(plugins.utils.inject(specs, 'specs', ['**/*']))
        .pipe(plugins.utils.inject(templateCache, 'templates'))
        .pipe(gulp.dest(config.client));
    }
  };
};
