const gulp=require('gulp');
const sass=require('gulp-sass')(require('sass'));
const sourcemaps=require('gulp-sourcemaps');





function compliarSASS(){
  return gulp.src('./source/stiles/*main.scss')
  .pipe()
}
function compliarsImagen(){
  return gulp.src('./source/imagens/*');
}
function compliarJS(cb){
  return compliarJSs(cb);
}

exports.default = gulp.series(compliarSASS, compliarsImagen, compliarJS)