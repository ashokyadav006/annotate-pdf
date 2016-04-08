const gulp = require('gulp'),
	  babel = require('gulp-babel');

gulp.task('default', function() {
	return gulp.src("src/*.js")
		.pipe(babel())
		.pipe(gulp(dest("dist")))
});