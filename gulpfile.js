var gulp = require('gulp'),
    cssmin = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less');

gulp.task('default', function() {

})

gulp.task('js', function() {
  
})

gulp.task('less', function() {
  gulp.src('src/style/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cssmin({compatibility: 'ie7'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
})