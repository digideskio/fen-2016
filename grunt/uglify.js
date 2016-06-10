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
	// Header JS.
	// -------------------------------------
	header: {
		files: {
			'js/header.min.js': [ '<%= concat.header.dest %>' ]
		}
	},
	// Header JS for IE.
	// -------------------------------------
	header_ie: {
		files: {
			'js/header_ie.min.js': [ '<%= concat.header_ie.dest %>' ]
		}
	},
	// Footer JS.
	// -------------------------------------
	footer: {
		files: {
			'js/footer.min.js': [ '<%= concat.footer.dest %>' ]
		}
	}
};
