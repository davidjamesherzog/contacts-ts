'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * Bump the version
   * --type=pre will bump the prerelease version *.*.*-x
   * --type=patch or no flag will bump the patch version *.*.x
   * --type=minor will bump the minor version *.x.*
   * --type=major will bump the major version x.*.*
   * --version=1.2.3 will bump to a specific version and ignore other flags
   */
  return function (done) {
    var msg = 'Bumping versions';
    var type = plugins.args.type;
    var version = plugins.args.ver;
    var options = {};
    if (version) {
      options.version = version;
      msg += ' to ' + version;
    } else {
      options.type = type;
      msg += ' for a ' + type;
    }
    plugins.utils.log(msg);

    return gulp
      .src(config.packages)
      .pipe(plugins.print())
      .pipe(plugins.bump(options))
      .pipe(gulp.dest(config.root));
  };
};
