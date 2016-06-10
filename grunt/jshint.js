// JSHint Task - https://github.com/gruntjs/grunt-contrib-jshint
// ----------------------------------------------------------------------------
module.exports = {
	options: {
		// Import our JSHint config options.
		// -------------------------------------
		jshintrc: 'grunt/config/jshintrc.json',
	},
	// Lint our Javascript.
	// -------------------------------------
	scripts: {
		src: [
			'assets/js/**/*.js',
			'!assets/js/lib/modernizr-custom.js'
		]
	}
};
