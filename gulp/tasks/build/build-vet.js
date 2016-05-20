'use strict';

module.exports = function (gulp, config, plugins) {
  /**
   * vet the code and create coverage report
   * @return {Stream}
   */
  return function () {
    plugins.utils.log('Analyzing source with TSLint, JSHint and JSCS');

    return gulp
      .src(config.alljs)
      .pipe(plugins.if(plugins.args.verbose, plugins.print()))
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('jshint-stylish', {verbose: true}))
      .pipe(plugins.jshint.reporter('fail'))
      .pipe(plugins.jscs());
  };
};
