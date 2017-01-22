var gulp = require("gulp");
var browserify = require("gulp-browserify");
var reactify = require("reactify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var watchify = require("watchify");
var babel = require('gulp-babel');
gulp.task("bundle", function () {

    gulp.src('./build/public/main1.js')
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build/js'))

   /* return browserify({
        entries: "./build/public/main1.js",
        debug: true
    }).transform(babelify)
        .bundle()
        .pipe(source("m.js"))
        .pipe(gulp.dest("build/public")) */
});

gulp.task('reacti', function () {
    var bundler = watchify(browserify(watchify.args));
    console.log("===");
    return bundler.add('./public/circle.jsx')
        .transform('reactify',{harmony:true, es6module:true})
        .bundle()
        .pipe(source('circle.js'))
        .pipe(gulp.dest('public'));

});
gulp.task("jsx", function(){
    return gulp.src("/*.jsx")
        .pipe(babel({
            presets: ['es2015',"react"]
        }))
        .pipe(gulp.dest("public"));
});


