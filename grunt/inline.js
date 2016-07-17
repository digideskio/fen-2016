module.exports = {

    dist: {
		files: [{
            expand: true,
            cwd: 'assets/html/',
            src: ['*.html'],
            dest: 'assets/html/',
            ext: '.tmp.html',
        }]
    }
}
