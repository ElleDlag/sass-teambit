let mix = require('laravel-mix');
mix	.js('src/js/script.js', 'public/js')
	.sass('src/scss/main.scss', 'public/css')
	.options({
        processCssUrls: false
    })
	.copyDirectory('src/html', 'public')
	.copy('src/fonts/*.woff', 'public/fonts')
	.copyDirectory('src/img', 'public/img')