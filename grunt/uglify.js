module.exports = {
    js: {
        files: {
            'assets/js/script.min.js': [ 'assets/js/script.js' ]
        }
    },
    cdn: {
        files: {
            'cdn/js/cdn.min.js': [
                'cdn/js/jquery.min.js',
                'cdn/js/*.js'
            ]
        }
    }
}