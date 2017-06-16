/**
 * Created by Administrator on 2017/6/16.
 */
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('es6',function(){
   gulp.src('src/js/**/*.js')
       .pipe(babel({
           presets:['es2015']
       }))
       .pipe(gulp.dest('dist/js'))
});

gulp.task('watch',['es6'],function(){
    gulp.watch(['src/js/**/*.js'], ['es6']);
});