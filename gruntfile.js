module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		init: true,
		jitGrunt: {
			jitGrunt: true,
		},
		data: {
			fancyName: 'FEN 2016',
			// -------------------------------------
			// Array of paths to Javascript files
			// for inclusion in the HEADER.
			// -------------------------------------
			concatHead: [
				'assets/js/lib/modernizr-custom.js',
				'assets/js/header.js'
			],

			// -------------------------------------
			// Array of paths to Javascript files
			// for inclusion in the HEADER for IE.
			// -------------------------------------
			concatHeadIE: [
				'bower_components/es5-shim/es5-shim.js',
				'bower_components/html5shiv/dist/html5shiv.js',
				'bower_components/selectivizr/selectivizr.js',
				'bower_components/respond/src/respond.js',
				'assets/js/header_ie.js'
			],

			// -------------------------------------
			// Array of paths to Javascript files
			// for inclusion in the FOOTER.
			// -------------------------------------
			concatFoot: [
				'bower_components/underscore/underscore.js',
				'assets/js/footer.js'
			],
		}
	});
	// -----------------------------------------------------------------------------
	// Provides a summary of the time tasks have taken.
	// -----------------------------------------------------------------------------
	require('time-grunt')(grunt);

	// -----------------------------------------------------------------------------
	// Silences grunt-newer.
	// https://github.com/tschaub/grunt-newer/issues/52#issuecomment-59397284
	// -----------------------------------------------------------------------------
	var origLogHeader = grunt.log.header;
	grunt.log.header = function(msg) {
		if (!/newer(-postrun)?:/.test(msg)) {
			origLogHeader.apply(this, arguments);
		}
	};
};
