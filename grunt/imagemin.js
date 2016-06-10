// Imagemin Task - https://github.com/gruntjs/grunt-contrib-imagemin
// ----------------------------------------------------------------------------
module.exports = {
	// Place minified versions of the image
	// assets in the theme.
	// -------------------------------------
	images: {
		options: {
			progressive: true
		},
		files: [ {
			expand: true,
			cwd: 'assets/img',
			src: [ '**/*.{png,jpg,gif}' ],
			dest: 'img/'
		} ]
	}
};
