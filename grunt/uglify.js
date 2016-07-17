// Uglify Task - https://github.com/gruntjs/grunt-contrib-uglify
// ----------------------------------------------------------------------------
module.exports = {
	// Uglify all of our JS assets.
	// -------------------------------------
	options: {
		// Turning off mangling keeps the original
		// code intact, reducing errors.
		// -------------------------------------
		mangle: false,
	},
	// Header JS for IE.
	// -------------------------------------
	ie: {
		files: {
			'js/ie.min.js': [ '<%= concat.ie.dest %>' ]
		}
	},
	// Footer JS.
	// -------------------------------------
	scripts: {
		files: {
			'js/scripts.min.js': [ '<%= concat.scripts.dest %>' ]
		}
	}
};
