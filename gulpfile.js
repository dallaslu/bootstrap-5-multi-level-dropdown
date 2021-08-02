const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Project Path
const src = {
    root: '',
}

function watch() {
    browserSync.init({
        notify: false,
        port: 3000,
        server: {
            baseDir: ".",
            index: "/demo.html"
        },
        watchOptions: {
            awaitWriteFinish: true
        }
    });

    gulp.watch('**/*.html', html);
    gulp.watch('**/*.css', css);
    gulp.watch('**/*.js', js);
}

function html() {
    return gulp.src(['**/*.html']).pipe(browserSync.stream({ once: true }));
}

function css() {
    return gulp.src(['**/*.css']).pipe(browserSync.stream({ once: true }));
}

function js() {
    return gulp.src(['**/*.js']).pipe(browserSync.stream({ once: true }));
}

exports.default = gulp.series(gulp.parallel(watch));