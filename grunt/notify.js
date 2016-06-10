// Notify Task - https://github.com/dylang/grunt-notify
// ----------------------------------------------------------------------------
module.exports = {
	// Notify once the project is rebuilt.
	// -------------------------------------
	build: {
		options: {
			title: 'Rebuild',
			message: '<%= fancyName %> is ready to rock!'
		}
	},
	// Notify once scripts are concatenated
	// and uglified.
	// -------------------------------------
	scripts: {
		options: {
			title: 'Scripts',
			message: '<%= fancyName %> scripts processed!'
		}
	},
	// Notify once styles are processed and
	// minified.
	// -------------------------------------
	styles: {
		options: {
			title: 'Styles',
			message: '<%= fancyName %> styles processed!'
		}
	},
	// Notify once images are minified.
	// -------------------------------------
	images: {
		options: {
			title: 'Images',
			message: '<%= fancyName %> images processed!'
		}
	}
};
