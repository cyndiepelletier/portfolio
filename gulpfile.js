var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

gulp.task('default', function() {
  // place code for your default task here
  gulp.start('sass');
  gulp.start('watch');
});

gulp.task('sass', function () {
    gulp.src('./scss/**/*.scss')        
        .pipe(plumber())
        .pipe(sass({ 
        	includePaths : ['./bower_components/foundation/scss'] 
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
	
	gulp.watch('./scss/**/*.scss', ['sass']);

});