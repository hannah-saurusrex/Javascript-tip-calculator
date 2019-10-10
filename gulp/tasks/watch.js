var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
    console.log("hooray, you created a gulp task");
});

gulp.task('watch', function() {
    
    watch('./app/index.html', function() {
        gulp.series('html');
    });

    watch('./app/css/*.css', function() {
        gulp.series('styles');
    });
});