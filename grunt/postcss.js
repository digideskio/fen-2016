// PostCSS Task - https://github.com/nDmitry/grunt-postcss
// ----------------------------------------------------------------------------
module.exports = {
	// Run our CSS through pixrem and
	// autoprefixer.
	// -------------------------------------
	options: {
		processors: [
			require( 'autoprefixer' )( {
				browsers: [ '> 5%', 'last 2 versions' ]
			} ),
			require( 'pixrem' )()
		]
	},
	css: {
		src: 'assets/css/site.css'
	}
}
