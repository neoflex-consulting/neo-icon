const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');
const svgSprite = require('gulp-svg-sprite');
const fileList = require('gulp-filelist');

function compTsx() {
    return gulp
        .src('components/**/*.tsx')
        .pipe(ts({
            ...tsconfig.compilerOptions,
            declaration: true,
        }))
        .pipe(gulp.dest('lib'))
}

function compSvgList() {
    return gulp
        .src('svg/**/*.svg')
        .pipe(fileList('filelist.json', { flatten: true, removeExtensions: true }))
        .pipe(gulp.dest('icons'));
}

function compSvg() {
    return gulp
        .src('svg/**/*.svg')
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(gulp.dest('icons'));
}

gulp.task('default', gulp.series(compTsx, compSvgList, compSvg));
