const path = require('path');

module.exports = {
    target: 'node',
    output: {
        filename: 'index.js'
    },
    resolve: {
        alias: {
            'graphql-toolkit': path.join(__dirname, '../dist/esnext')
        },
        modules: ['node_modules', '../node_modules']
    }
}