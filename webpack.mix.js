const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//mix.setPublicPath('Food');
//
//mix.js('Food/resources/js/app.js', 'js')
//    .sass('Food/resources/sass/app.scss', 'css');
    
mix.setPublicPath('Resorts');

mix.js('Resorts/resources/js/app.js', 'js')
    .sass('Resorts/resources/sass/app.scss', 'css');
