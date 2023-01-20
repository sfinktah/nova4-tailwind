const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
    .setPublicPath('dist')
    .vue({ version: 3 })
    .postCss("resources/css/tailwind.css", "css", [
        require("tailwindcss"),
    ])
