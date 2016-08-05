module.exports = {
    dist: {
        options: {
            lineNumbers: true,
            noCache: true,
            sourcemap: 'none',
            style: 'nested',
            trace: true,
            update: true
        },
        files: {
            'assets/css/main.css' : 'assets/sass/main.scss'
        }
    }
}
