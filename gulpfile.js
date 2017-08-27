/**
 *
 *  Material Design Lite
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

// jscs:disable jsDoc

'use strict';

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const uniffe = require('./utils/uniffe.js');

const $ = gulpLoadPlugins();

const SOURCES = [
    // Component handler
    'src/mdlComponentHandler.js',
    // Polyfills/dependencies
    'src/third_party/**/*.js',
    // Base components
    'src/button/button.js',
    'src/checkbox/checkbox.js',
    'src/icon-toggle/icon-toggle.js',
    'src/menu/menu.js',
    'src/progress/progress.js',
    'src/radio/radio.js',
    'src/slider/slider.js',
    'src/snackbar/snackbar.js',
    'src/spinner/spinner.js',
    'src/switch/switch.js',
    'src/tabs/tabs.js',
    'src/textfield/textfield.js',
    'src/tooltip/tooltip.js',
    // Complex components (which reuse base components)
    'src/layout/layout.js',
    'src/data-table/data-table.js',
    // And finally, the ripples
    'src/ripple/ripple.js'
];

gulp.task('default', ['scripts', 'colors']);

// Concatenate And Minify JavaScript
gulp.task('scripts', [], () => {
    return gulp.src(SOURCES)
        .pipe($.if(/mdlComponentHandler\.js/, $.util.noop(), uniffe()))
        .pipe($.concat('material.js'))
        .pipe($.iife({useStrict: true}))
        .pipe(gulp.dest('dist'))
});

// Replace mdl's string colors and unquotes with real sass colors
gulp.task('colors', [], () => {
    return gulp.src('src/**/*.scss')
    // replace sass unquote with the real function
        .pipe($.replace(/unquote\("(.+)"\)/g, function(match, p1) {
            const replacement = p1
                .replace(/#{(.+?)}/, '$1')
                .replace(/rgb\((.+)\)/, '$1');
            console.log(`Converting ${match} -> ${replacement}`);
            return replacement;
        }))
        // replace color strings with real sass colors
        .pipe($.replace(/"(\d{1,3},\d{1,3},\d{1,3})"/g, function(match, p1) {
            const replacement = `rgb(${p1})`
            console.log(`Converting ${match} -> ${replacement}`);
            return replacement;
        }))
        .pipe(gulp.dest('src'))
});
