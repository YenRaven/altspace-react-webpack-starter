const gulp = require('gulp');
const webpack = require('gulp-webpack');
const watch = require('gulp-watch');
const shell = require('gulp-shell');


function build(){
    return gulp.src('src/main.jsx')
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest('dist/'));
}

function html(){
    return gulp.src(['src/*.html', 'src/*.js'])
        .pipe(gulp.dest('dist/'));
}

function assets(){
    return gulp.src('assets/*')
        .pipe(gulp.dest('dist/assets/'));
}

gulp.task('html', function(){
    return html();
})

gulp.task('assets', function(){
    return assets();
})

gulp.task('build', ['html', 'assets'], function() {
    return build();
});

gulp.task('server', shell.task([
    'node server.js'
]));

gulp.task('default', ['build'], function(){
    gulp.start('server');
    return watch('src/**/*', function() {
        html();
        assets();
        build();
    });
});
