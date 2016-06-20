var gulp = require('gulp'),
	jslint = require('gulp-jslint');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('jslint', function(){
	return gulp.src('./js/**/*.js')
		.pipe(jslint())
		.pipe(jslint.reporter('default'));
});