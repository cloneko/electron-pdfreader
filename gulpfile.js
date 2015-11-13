// get the dependencies
var gulp        = require('gulp'), 
  childProcess  = require('child_process'), 
  electron      = require('electron-prebuilt'),
  gulpAsar      = require('gulp-asar');

// create the gulp task
gulp.task('run', function () { 
  childProcess.spawn(electron, ['./app'], { stdio: 'inherit' }); 
});

gulp.task('build', function () { 
  gulp.src('./app/**/*')
  .pipe(gulpAsar('pdf.asar'))
  .pipe(gulp.dest('asar'))
});