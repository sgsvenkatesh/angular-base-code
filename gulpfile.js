
var gulp = require('gulp');
var clean = require('gulp-clean');

var config = require('./build.config.js');

gulp.task('clean', function () {
    return gulp.src('build', { read: false }).pipe(clean());
});

gulp.task('build-scripts', function () {
    gulp.src(config.vendorFiles.css).pipe(gulp.dest('build/lib/css'));
    return gulp.src(config.vendorFiles.js).pipe(gulp.dest('build/lib/js'));
});

gulp.task('build-app', function () {
    return gulp.src(['index.html', 'app/**'], { base: "." }).pipe(gulp.dest('build'));
});

gulp.task("watch-build", function () {
    gulp.watch(['index.html', 'app/**'], ['build-app']);
});

gulp.task('build', ['build-app', 'build-scripts']);
