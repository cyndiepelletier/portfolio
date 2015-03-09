var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');

gulp.task('default', ['connect', 'sass', 'watch']);

gulp.task('sass', function () {
    gulp.src('./scss/**/*.scss')        
        .pipe(plumber())
        .pipe(sass({ 
        	includePaths : ['./bower_components/foundation/scss'] 
        }))
        .pipe(connect.reload())
        .pipe(gulp.dest('./css'));
});

gulp.task('html', function() {

    gulp.src('./**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
	
	gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./**/*.html', ['html'])

});

gulp.task('connect', function() {
    connect.server({
        port: 9000,
        livereload: true
    });
});