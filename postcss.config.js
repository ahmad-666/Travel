const autoprefixer = require('autoprefixer') ;
const purgecss = require('@fullhuman/postcss-purgecss') ;
module.exports = {
	plugins: [
	  purgecss({
		  content: ['./*.html','./src/*.html','./src/js/*.js'],
		  fontFace: true ,
		  keyframes: true
	  }),
	  autoprefixer
	]
}