// HTML Min - https://github.com/gruntjs/grunt-contrib-htmlmin
// ----------------------------------------------------------------------------
module.exports = {
	site: {
		options: {
			removeComments: true,
			collapseWhitespace: true,
			minifyJS: true,
			minifyCSS: true,
		},
		files: [{
            expand: true,
            cwd: 'assets/html/',
            src: ['*.tmp.html'],
            dest: '',
            ext: '.html',
        }]
	},
}
