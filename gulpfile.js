const gulp = require('gulp');
const ts = require('gulp-typescript');
const del = require('del');
var tsProject = ts.createProject('tsconfig.json');

function transpile() {
    return tsProject
      .src()
      .pipe(tsProject())
      .js.pipe(gulp.dest('build'));    
}

function copyDatabase() {
    return gulp.src('src/database/*.sqlite')
    .pipe(gulp.dest('build/database'));
}

function clean() {
    return del('build/')
}

const start = gulp.series(clean, copyDatabase, transpile);

exports.default = start;


