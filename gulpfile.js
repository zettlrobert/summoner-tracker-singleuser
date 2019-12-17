const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const purgecss = require('gulp-purgecss');
const cleancss = require('gulp-clean-css');
const minifyJS = require('gulp-minify');


gulp.task('test', function () {
  return new Promise((function (resolve, reject) {
    console.log("Gulp is working...");
    resolve();
  }));
})

// Minify Pictures
gulp.task('minify', () => {
  return new Promise(((resolve, reject) => {
    console.log('minify running...');

    gulp.src(['src/assets/**.*', 'src/league-official-wallpapers/**.*'], { base: './src/' })
      .pipe(imagemin())
      .pipe(gulp.dest('./public/'))

    resolve();
  }))
})

//Clean AutoPrefix Pruge CSS
gulp.task('cleancss', () => {
  return new Promise((resolve, reject) => {
    console.log('cleancss...');
    gulp.src('src/css/**.css')
      .pipe(purgecss({
        content: ['src/*.html']
      }))
      .pipe(gulp.dest('src/css'))
    resolve();
  })
})

gulp.task('cssdist', () => {
  return new Promise((resolve, reject) => {
    console.log('running autoprefixer');
    gulp.src('src/css/**.css')
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(cleancss({ compatibility: 'ie8' }))
      .pipe(gulp.dest('public/css'))
    resolve();
  })
})


//Minify JS
gulp.task('minifyjs', () => {
  return new Promise((resolve, reject) => {
    console.log('Minimizing Script...')
    gulp.src('src/js/*.js')
    pipe.(minifyJS());
    pipe(gulp.dest('public/js'))
  })
})



// gulp.task('dist', () => {
//   return new Promise((resolve, reject) => {
//     console.log('running dist...');
//     gulpl.src([
//       'src/*.html',
//     ])
//   })
// })