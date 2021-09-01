const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        // this will apply to both plain `.js` files
        // AND `<script>` blocks in `.vue` files
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        },
        // this will apply to both plain `.css` files
        // AND `<style>` blocks in `.vue` files
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    },
    // Where to compile the bundle
    // By default the output directory is `dist`
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            watch: true,
        },
        port: 3000,
        compress: true,
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './src/index.html',
        // }),
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
  }