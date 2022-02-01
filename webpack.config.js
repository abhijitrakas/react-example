const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'build/bundle.js'
    },
    mode: 'production',
    module: {
        rules: [
            {'test': /\.js$/, 'use': 'babel-loader'},
            {'test': /\.css$/, 'use': [MiniCssExtractPlugin.loader, "css-loader"]},
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'build/bundle.css'
        })
    ]
};
