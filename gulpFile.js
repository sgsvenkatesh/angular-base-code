
var gulp = require('gulp');
var clean = require('gulp-clean');

var config = require('./build.config.js');

gulp.task('clean', function () {
    return gulp.src('build', { read: false }).pipe(clean());
});

gulp.task('build', function () {
    return gulp.src(['app/**','index.html'], { base: "." }).pipe(gulp.dest('build'));
});
