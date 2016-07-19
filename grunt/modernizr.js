// Modernizr Task - https://github.com/Modernizr/grunt-modernizr
// ----------------------------------------------------------------------------
module.exports = {
    // Generate a custom Modernizr build
    // based on the checks found in our
    // Sass & Javascript.
    // -------------------------------------
    custom: {
        "cache": true,
        "uglify": false,
        "options": [
            "domPrefixes",
            "prefixes",
            "mq",
            "prefixed",
            "testAllProps",
            "testProp",
            "setClasses",
        ],
        "tests": [
            "cssanimations",
        ],
        "excludeTests": [
            "hidden"
        ],
        "devFile": "bower_components/modernizr/src/Modernizr.js",
        "dest": "assets/js/lib/modernizr-custom.js",
        "crawl": true,
        "files": {
            "src": [
                'assets/sass/**/*.scss',
                'assets/js/**/*.js',
                '!assets/js/lib/modernizr-custom.js'
            ]
        }
    }
};
