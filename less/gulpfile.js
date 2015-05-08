var gulp  = require('gulp');
var watch = require('gulp-watch');
var less  = require('gulp-less');

var path = {
  less:"less/*.less",
  css:"css"
};

gulp.task('lesschange',function(){
   return gulp.src(path.less)
          .pipe(less())
          .pipe(gulp.dest(path.css))
});

gulp.task('watch',function(){
  gulp.watch(path.less,['lesschange'])
});

gulp.task('default',['lesschange','watch'],function(){
 // console.log('hello gulp');
});
