// Concat Task - https://github.com/gruntjs/grunt-contrib-concat
// ----------------------------------------------------------------------------
module.exports = {
	options: {
		separator: '\r\n\r\n',
	},
	// Header JS for IE.
	// -------------------------------------
	ie: {
		src: [ '<%= concatIE %>' ],
		dest: 'assets/js/ie.tmp.js',
		nonull: true
	},
	// Footer JS.
	// -------------------------------------
	scripts: {
		src: [ '<%= concatScripts %>' ],
		dest: 'assets/js/scripts.tmp.js',
		nonull: true
	}
};
