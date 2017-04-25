const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundel.js'
    },
    module: {
        rules: [
            {'test': /\.js$/, 'use': 'babel-loader'},
        ]
    }
};