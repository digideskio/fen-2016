// Watch Task - https://github.com/gruntjs/grunt-contrib-watch
// ----------------------------------------------------------------------------
module.exports = {
	options: {
		// Livereload support - requires a browser plugin
		livereload: true,
		spawn: false
	},

	// Minify JPG & PNG images.
	// -------------------------------------
	images_jpg: {
		files: [ 'assets/img/**/*.{jpg,png,gif}' ],
		tasks: [
			'imagemin',
			'notify:images'
		]
	},

	// Process scripts.
	// -------------------------------------
	scripts: {
		files: [
			'assets/js/**/*.js',
			'!assets/js/lib/modernizr-custom.js'
		],
		tasks: [
			// 'jshint',
			'modernizr',
			'concat',
			'uglify',
			'clean',
			'notify:scripts'
		]
	},

	// Process styles.
	// -------------------------------------
	styles: {
		files: [ 'assets/sass/**/*.scss', 'assets/html/*.html' ],
		tasks: [
			'sass',
			'postcss',
			'criticalcss',
			'cssmin',
			'inline',
			'htmlmin',
			'notify:styles'
		]
	}
};
