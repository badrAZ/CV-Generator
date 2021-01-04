const execFile = require('child_process').execFileSync
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const { resolve } = require('path')

const getPath = path => resolve(__dirname, path)

// TODO: use chunk for optimization
const client = {
  entry: getPath('web'),
  output: {
    filename: 'client.bundle.js',
    path: getPath('dist'),
  },
  resolve: {
    alias: {
      common: getPath('web/common'),
    },
  },
  target: 'web',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
              ],
              [
                '@babel/plugin-proposal-decorators',
                {
                  legacy: true,
                },
              ],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          publicPath: './',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'web/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    contentBase: getPath('disk'),
    compress: true,
    port: 3001,
    open: true,
    proxy: {
      '/cv': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/cv': '' },
      },
    },
  },
}

const SERVER_FILE_NAME = 'server.bundle.js'
const server = {
  entry: getPath('server'),
  output: {
    filename: SERVER_FILE_NAME,
    path: getPath('dist'),
  },
  resolve: {
    alias: {
      common: getPath('server/common'),
    },
  },
  target: 'node',
  // in order to ignore all modules in node_modules folder
  externals: [nodeExternals()],
  // __dirname issue: global __dirname differed
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
              ],
              [
                '@babel/plugin-proposal-decorators',
                {
                  legacy: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    // add line in the top of the bundle, raw to not wrap the string in the comment
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
    {
      apply: compiler =>
        compiler.hooks.afterCompile.tap('executable', () => {
          execFile('chmod', ['a+x', getPath(`dist/${SERVER_FILE_NAME}`)])
        }),
    },
  ],
}

module.exports = (env, argv) => {
  const devtool =
    (env && env.WEBPACK_SERVE) || argv.mode === 'development'
      ? 'source-map'
      : false
  return [
    { devtool, ...server },
    { devtool, ...client },
  ]
}
