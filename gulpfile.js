var gulp = require('gulp'),
    config = require('./gulp.config')(),
    plugins = require('gulp-load-plugins')({lazy: true}),
    server = require('karma').server;

plugins.server = require('karma').server;
plugins.del = require('del');
plugins.utils = require('./gulp/utils')();
plugins.args = require('yargs').argv;

config.pkg = require('./package.json');

plugins.simpleTaskLoader({
    taskDirectory: 'gulp/tasks/',
    filenameDelimiter: '-',
    tasknameDelimiter: ':',
    plugins: plugins,
    config: config
});
