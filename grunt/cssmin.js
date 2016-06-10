// CSSMin Task - https://github.com/gruntjs/grunt-contrib-cssmin
// ----------------------------------------------------------------------------
module.exports = {
	// Front End Styles.
	// -------------------------------------
	frontend: {
		options: {
			compatibility: 'ie8'
		},
		src: 'assets/css/site.css',
		dest: 'css/site.min.css'
	}
};
