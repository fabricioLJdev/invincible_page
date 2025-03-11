const gulp = require('gulp'); //importando o gulp
const sass = require('gulp-sass')(require('sass')); //importando o compilador sass
const imagemin = require('gulp-imagemin'); //importando o pluggin que instalamos na versão @7.1.0

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}