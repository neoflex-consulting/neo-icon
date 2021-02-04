const path = require('path');

module.exports = {
    entry: './src/components/index.tsx',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'neo-icon',
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