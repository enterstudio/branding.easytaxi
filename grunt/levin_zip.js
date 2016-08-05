module.exports = {
    levin_zip: {
        options: {
            mode:'zip',
        },
        files: [
            {
                src: ['assets/_png/*'],
                dest: 'assets/_png/',
                alias_name: 'easy-logo'
            }
        ]
    }
}