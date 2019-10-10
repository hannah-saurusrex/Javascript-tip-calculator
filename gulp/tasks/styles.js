var gulp = require('gulp');

gulp.task('styles', function() {
    return gulp.src('./app/css/main.css').pipe(gulp.dest('./app/temp/styles'));
});