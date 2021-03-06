var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    entry: './static/js/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs
    output: {
        path: path.resolve('./static/webpack_bundles/'),
        filename: "[name]-[hash].js"
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'})
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:['react']
                }
            }, // to transform JSX into JS
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            }
        ],
    },

    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    },
}
