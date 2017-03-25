const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./main.jsx",
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['transform-decorators-legacy'],
            }
        }]
    },
    output: {
        path: __dirname + "/public/build/",
        filename: "bundle.min.js"
    },
    plugins: debug ? [new FriendlyErrorsWebpackPlugin()] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
};