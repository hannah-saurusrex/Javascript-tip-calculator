const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
    // 1. where is my scss file
    return gulp.src('./app/css/main.css')
    // 2. pass that file through the sass compiler
    .pipe(sass().on('error', sass.logError))
    // 3. where do I save the new compiled css file?
    .pipe(gulp.dest('./app/temp/styles'))
    // 4. stream changes to all browsers via browsersync :)
    .pipe(browserSync.stream())
}

// watch task; this watches specific files and automatically updates browsers for us!
function watch() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    gulp.watch('./app/css/**/*.css', style);
    gulp.watch('./app/*.html').on('change', browserSync.reload);
    gulp.watch('./app/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;