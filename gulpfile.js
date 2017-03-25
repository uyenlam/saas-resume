const gulp = require('gulp');
const fs = require("fs");
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const sync = require('run-sequence');
const gutil = require('gulp-util');
const stripCssComments = require('gulp-strip-css-comments');



gulp.task('css', () => {
    return gulp.src([])
        .pipe(stripCssComments())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/dist'))
});


gulp.task('scripts', () => {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'public/build/bundle.min.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/dist'));
});
gulp.task('default', (done) => {
    sync('css', 'scripts', done);
    //sync( 'css', done);
});