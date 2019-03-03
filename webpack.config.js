const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

const settings = {
    distPath: path.join(__dirname, "dist"),
    srcPath: path.join(__dirname, "src")
};

module.exports = {
    devServer: {
        publicPath: "/",
        historyApiFallback: true
        // this prevents the default browser full page refresh on form submission and link change
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: [ 'style-loader', 'css-loader']},
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]"
                    }
                }
            },
        ]
    },
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin([settings.distPath], {
            verbose: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/public/index.html'
        })
    ]
};
