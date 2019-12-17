const gulp = require('gulp');
const purgecss = require('gulp-purgecss');


gulp.task('test', function () {
  return new Promise((function (resolve, reject) {
    console.log("Gulp is working...");
    resolve();
  }));
})

//Clean CSS
gulp.task('cleancss', () => {
  return new Promise((resolve, reject) => {
    console.log('clean css running...');
    gulp.src('src/css/*.css');
    .pipe(purgecss({
      content: ['src/*.html']
    }))
      .pipe(gulp.dest('src/css'))
    resolve();
  })
})