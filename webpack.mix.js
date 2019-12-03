let mix = require('laravel-mix');
mix	.js('src/js/script.js', 'public/js')
	.sass('src/scss/main.scss', 'public/css')
	.copyDirectory('src/html', 'public')
	.copyDirectory('src/img', 'public/images')