"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("copy", function() {
  return gulp.src([
    "source/*.html",
    "source/img/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("build", gulp.series("clean", "copy", "css"));
gulp.task("start", gulp.series("css", "server"));

//gulp.task("css", function () {
//  return gulp.src("source/less/style.less")
//    .pipe(plumber())
//    .pipe(less())
//    .pipe(postcss([
//      autoprefixer()
//    ]))
//    .pipe(gulp.dest("source/css"))
//    .pipe(server.stream());
//});
//
//gulp.task("server", function () {
//  server.init({
//    server: "source/",
//    notify: false,
//    open: true,
//    cors: true,
//    ui: false
//  });
//
//  gulp.watch("source/less/**/*.less", gulp.series("css"));
//  gulp.watch("source/*.html").on("change", server.reload);
//});
//
//gulp.task("start", gulp.series("css", "server"));
