const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = "development";



module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    mode: 'development',
    entry: './main.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                          modules: {
                            localIdentName: '[local]'
                          }
                        }
                      }
                ],
            }

        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'css'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin(),
    ],
    watch: true,
}