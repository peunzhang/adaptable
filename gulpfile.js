let gulp = require('gulp');
let rename = require("gulp-rename");
let less = require('gulp-less');
let uglify = require('gulp-uglify');
let header = require('gulp-header');
let LessAutoprefix = require('less-plugin-autoprefix');
let autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
let pkg = require('./package.json');
//项目路径
let option = {base: 'src'};
let dist = __dirname + '/dist';
let jsPath = ['src/*.js'];
let lessPath = ['src/*.less'];
let htmlPath = ['src/*.html'];
let banner = [
'/*!',
' * 名称 : adaptable 页面自动适配',
' * 作者 ：<%= pkg.author %> <%= pkg.homepage %>',
' * 版本 ：<%= pkg.version %>',
' * 日期 ：<%= new Date().toLocaleDateString() %>',
' * 兼容 ：ios 5+、android 2.3.5+、winphone 8+',
' */',
''].join('\n');

gulp.task('js', () => {
	return gulp.src(jsPath, option)
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(header(banner, { pkg : pkg } ))
		.pipe(gulp.dest(dist));
});

gulp.task('less', () =>{
    return gulp.src(lessPath, option)
        .pipe(less({
            plugins: [autoprefix]
        }).on('error', function (e) {
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(gulp.dest(dist))
})

gulp.task('html', () =>{
    return gulp.src(htmlPath, option)
        .pipe(gulp.dest(dist))
})
gulp.task('default', ['js', 'less', 'html']);
