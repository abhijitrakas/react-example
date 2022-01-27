const webpack = require('webpack');
const path = require('path');
const PacktrackerPlugin = require('@packtracker/webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'build/bundel.js'
    },
    mode: 'production',
    module: {
        rules: [
            {'test': /\.js$/, 'use': 'babel-loader'},
            {'test': /\.css$/, 'use': ["style-loader", "css-loader"]},
        ]
    },
    plugins: [
        new PacktrackerPlugin({
          project_token: process.env.PT_PROJECT_TOKEN,
          upload: !!process.env.PT_PROJECT_TOKEN,
          fail_build: true,
          branch: process.env.PT_BRANCH,
          author: process.env.PT_AUTHOR,
          message: process.env.PT_MESSAGE,
          commit: process.env.PT_COMMIT,
          committed_at: process.env.PT_COMMITTED_AT,
          prior_commit: process.env.PT_PRIOR_COMMIT,
        })
    ]
};
