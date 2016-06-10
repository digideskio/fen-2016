// Concat Task - https://github.com/gruntjs/grunt-contrib-concat
// ----------------------------------------------------------------------------
module.exports = {
	options: {
		separator: '\r\n\r\n',
	},
	// Header JS.
	// -------------------------------------
	header: {
		src: [ '<%= concatHead %>' ],
		dest: 'assets/js/header.tmp.js',
		nonull: true
	},
	// Header JS for IE.
	// -------------------------------------
	header_ie: {
		src: [ '<%= concatHeadIE %>' ],
		dest: 'assets/js/header_ie.tmp.js',
		nonull: true
	},
	// Footer JS.
	// -------------------------------------
	footer: {
		src: [ '<%= concatFoot %>' ],
		dest: 'assets/js/footer.tmp.js',
		nonull: true
	}
};
