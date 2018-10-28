'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
 
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')

    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});
 
gulp.task('sass:watch', function () {

	  browserSync.init({
	    server: "."
	});
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch("./*.htm").on('change', browserSync.reload);
});