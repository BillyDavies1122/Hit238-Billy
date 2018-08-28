var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function(){
  return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
});

gulp.task('default', gulp.series('js'));
