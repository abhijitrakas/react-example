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
          project_token: process.env.PT_PROJECT_TOKEN,
          upload: !!process.env.PT_PROJECT_TOKEN,
          fail_build: true
        })
    ]
};
