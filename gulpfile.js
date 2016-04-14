var gulp = require('gulp'),
    gutil = require('gulp-util')
    concat = require('gulp-concat')
    sourcemaps = require('gulp-sourcemaps')
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),


gulp.task("default",['watch']);

gulp.task("watch",['build-lib'], function(){
	gulp.watch("src/sass/**/*",['build-sass']);

});

gulp.task("build-lib",function(){
	return gulp.src(["src/assets/libs/**/*.min.js","src/assets/libs/**/*.min.css"])
					.pipe(gulp.dest('dist/assets/libs/'));	
});
