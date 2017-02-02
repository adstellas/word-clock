'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('concat-min-scripts', function() {
    return gulp.src('./src/scripts/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/scripts/'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/'));
});

gulp.task('minify-styles', function() {
    return gulp.src('./src/styles/main.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('serve-dist', ['concat-min-scripts', 'minify-css'], function () {
    var livereload = require('gulp-livereload'),
        open = require('gulp-open'),
        options = {
            uri: 'http://localhost:8080',
            app: 'chrome'
        };

    livereload.listen({
        start: true,
        port: 35729
    });

    gulp.watch('./src/styles/main.css', ['minify-styles']);
    gulp.watch('./src/scripts/*.js', ['concat-min-scripts']);
    gulp.watch(['./dist/index.html', './index.html','./dist/styles/main.css', './dist/scripts/scripts.min.js'])
        .on('change', livereload.changed);

    gulp.src('./dist/index.html').pipe(open(options));
});

gulp.task('serve', function () {
    var livereload = require('gulp-livereload'),
        open = require('gulp-open'),
        options = {
            uri: 'http://localhost:8080',
            app: 'chrome'
        };

    livereload.listen({
        start: true,
        port: 35729
    });

    gulp.watch(['./index.html', './src/styles/main.css', './src/scripts/scripts.min.js']).on('change', livereload.changed);

    gulp.src('./index.html').pipe(open(options));
});