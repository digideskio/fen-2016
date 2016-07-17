// Default Task - The master task used to build/re-build the project. Comment,
// un-comment or re-arrange to suit your specific needs.
// ----------------------------------------------------------------------------
module.exports = function( grunt ) {
	grunt.registerTask( 'default', [
		"sass",
		"postcss",
		"criticalcss",
		"cssmin",
		"modernizr",
		"concat",
		"uglify",
		//"svgmin",
		"imagemin",
		"inline",
		"htmlmin",
		"clean",
		"notify:build"
	] );
};
