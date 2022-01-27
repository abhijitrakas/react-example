const webpack = require('webpack');
const path = require('path');
const PacktrackerPlugin = require('@packtracker/webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'build/bundel.js'
    },
    module: {
        rules: [
            {'test': /\.js$/, 'use': 'babel-loader'},
        ]
    },
    plugins: [
        new PacktrackerPlugin({
          project_token: '1a3d4ba8-2ca6-447f-90b9-2b2a1b97b0ab',
          upload: true,
          fail_build: true
        })
    ]
};
