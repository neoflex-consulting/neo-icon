const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'NeoIcon',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', '.ts','.jsx', '.tsx']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};