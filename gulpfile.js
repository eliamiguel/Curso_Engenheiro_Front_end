const gulp=require('gulp');
const sass=require('gulp-sass')(require('sass'));
const sourcemaps=require('gulp-sourcemaps');





function compliarSASS(){
  return gulp.src('./source/styles/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./build/styles'));
}

function compliarsImagen(){
  return gulp.src('./source/imagens/*')
  .pipe()
}
function compliarJS(cb){
  return gulp.src('./source/scripts/*.js')
  .pipe()
}

exports.sass = compliarSASS;