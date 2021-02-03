const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: '/src/components/index.tsx',
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts','.jsx', '.tsx']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};