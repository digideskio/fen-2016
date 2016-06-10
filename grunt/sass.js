// Sass Task - https://github.com/sindresorhus/grunt-sass
// ----------------------------------------------------------------------------
module.exports = {
	// Generate CSS from our Sass files.
	// -------------------------------------
	sass: {
		options: {
			style: 'compressed'
		},
		files: [ {
			expand: true,
			cwd: 'assets/sass',
			src: [ '*.scss' ],
			dest: 'assets/css',
			ext: '.css'
		} ]
	}
};
