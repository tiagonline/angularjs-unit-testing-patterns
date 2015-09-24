(function () {

  'use strict';

  var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    paths = require('./config/paths.js');

  var tasks = [
    'build-lib',
    'build-packages',
    'default',
    'eslint',
    'github',
    'karma',
    'watch'
  ];

  tasks.forEach(function (task) {
    require('./config/gulp/' + task + '.js')(gulp, plugins, paths);
  });

})();
