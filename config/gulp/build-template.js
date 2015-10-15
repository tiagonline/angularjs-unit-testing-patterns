module.exports = function (gulp, plugins, paths) {

  'use strict';

  gulp.task('build-template', function () {
    return gulp.src(paths.html)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.angularTemplatecache({
        filename: 'template.min.js',
        module: 'app',
        moduleSystem: 'IIFE',
        root: 'src/packages/'
      }))
      .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(paths.dist));
  });

};
