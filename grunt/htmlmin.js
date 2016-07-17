// HTML Min - https://github.com/gruntjs/grunt-contrib-htmlmin
// ----------------------------------------------------------------------------
module.exports = {
	site: {
		options: {
			removeComments: true,
			collapseWhitespace: true
		},
		files: [{
            expand: true,
            cwd: 'assets/html/',
            src: ['*.html'],
            dest: '',
        }]
	},
}
