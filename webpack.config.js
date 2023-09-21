const path = require('path');
const resolveApp = (relativePath) => path.resolve(__dirname, relativePath); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
    mode: 'none',
    // mode: 'production',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: resolveApp('./dist'),
    },
    resolve: {
      alias: {
        '@': resolveApp('./src'),
      },
    },
    module: {
      rules: [
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          title: 'docker多阶段构建',
          versionInfo: `构建时间：${new Date().toLocaleString()}`, // 发布标注
        }),
        new DefinePlugin({
          BASE_URL: JSON.stringify('./'),
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    globOptions: {
                        ignore: ['**/.DS_Store', '**/index.html'],
                    },
                },
            ],
        }),
    ],
  }