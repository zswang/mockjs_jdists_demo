/*jshint globalstrict: true*/
/*global require*/

'use strict';

var gulp = require('gulp');
var jdists = require('gulp-jdists');

gulp.task('build', function() {
  return gulp.src(['*.html'])
    .pipe(jdists({
      trigger: 'release'
    }))
    .pipe(gulp.dest('./gulp-dist'))
});

gulp.task('default', ['build']);