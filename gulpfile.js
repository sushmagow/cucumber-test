var gulp = require('gulp'),
	cucumber = require('gulp-cucumber');

gulp.task('test', function () {
	return gulp.src('features/*')
	.pipe(cucumber({
		'steps': 'features/step/steps.js',
		'format': 'summary'
	}));
});