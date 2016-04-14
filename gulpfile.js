var gulp = require('gulp'),
    gutil = require('gulp-util')
    concat = require('gulp-concat')
    sourcemaps = require('gulp-sourcemaps')
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    uglifycss = require('gulp-uglifycss');


gulp.task("default",['watch']);

//gulp watch task for sorce code
gulp.task("watch",['build-lib'], function(){
	gulp.watch("src/sass/*",['build-sass']);
	gulp.watch("src/assets/css/**/*.css",['product-css']);

});

//Getting minified libs and put to distribution
gulp.task("build-lib",function(){
	return gulp.src(["src/assets/libs/**/*.min.js","src/assets/libs/**/*.min.css"])
					.pipe(gulp.dest('dist/assets/libs/'));	
});

//Compiling sass to css in source
gulp.task("build-sass",function(){
	return gulp.src('src/sass/*.scss')
      .pipe(sass())
    .pipe(gulp.dest('src/assets/css/'));
});

//Build, Minified css for distribution
gulp.task("product-css", function(){
	return gulp.src("src/assets/css/**/*.css")
			.pipe(sourcemaps.init())
			.pipe(concat("main.min.css"))
			.pipe(uglifycss())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('dist/assets/css/'));
});
