'use strict';

module.exports = function (gulp, config, plugins) {

  return function () {
    plugins.nodemon({
        script: './src/server/app.js',
        ext: 'js',
        env: {
          PORT: 8000
        },
        ignore: ['./node_modules/**', './bower_components/**']
      })
      .on('restart', function () {
        console.log('Restarting');
      });
  };
};
