var gulp = require('gulp');

gulp.task('test', function () {
	return './node_modules/.bin/cucumber-js';
});