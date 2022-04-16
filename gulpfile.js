const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');

/*
 -- TOP LEVEL FUNCTIONS --
 gulp.task - Define tasks
 gulp.src - Point to files to use
 gulp.dest - Point to folder to output
 gulp.watch - Watch files and folders for changes
*/

// Logs Message
gulp.task('message', function(){
    return console.log('Gulp is running...');
});

// Optimize images/* and moved to dist/images
gulp.task('image:min', () =>
	gulp.src('source/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images/'))
);

// Remove images from dist
gulp.task('image:clean', function(){
	return del('dist/images/', {force:true})
});

