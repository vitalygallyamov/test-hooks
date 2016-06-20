var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	map = require('map-stream'),
	symlink = require('gulp-symlink');

//custom reporter
var errorReporter = function () {
  return map(function (file, cb) {
	if (!file.jshint.success) {
		process.exit(1);
	}
	cb(null, file);
  });
};

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('hook', function () {
	return gulp.src('hooks/.pre-commit')
		.pipe(symlink(function(file){
			return new symlink.File({
				path: '../.git/hooks/pre-commit',
				cwd: process.cwd()
			});
		}, {force: true}));
});

gulp.task('jshint', function(){
	return gulp.src('./js/**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(errorReporter());
});