const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: "development",
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
      },
   output:{
       path: path.resolve(__dirname, 'dist'),     // путь к каталогу выходных файлов - папка public
       publicPath: '/',
       filename: '[name].[fullhash].js'
   },
   devServer: {
    historyApiFallback: true,
    port: 8081,
    open: true
  },
   resolve: {
    extensions: ['.ts', '.js']
  },
   module:{
       rules:[   //загрузчик для ts
           {
               test: /\.ts$/, // определяем тип файлов
               use: [
                {
                    loader: 'ts-loader',
                    options: { configFile: path.resolve(__dirname, 'tsconfig.json') }
                  } ,
                   'angular2-template-loader'
               ]
            }, 
            {
              test: /\.html$/,
              type: 'asset/source',
            },
            {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[fullhash].[ext]',
            }
          },{
            test: /\.css$/,
            exclude: path.resolve(__dirname, 'src/app'),
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader"
            ]
          },
          {
            test: /\.wasm$/,
            type: 'javascript/auto',
            loader: 'file-loader',
          },
          {
            test: /\.zip$/,
            loader: 'file-loader',
          },
          {
            test: /\.data$/,
            loader: 'file-loader',
          }

       ]
   },
   plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.resolve(__dirname, 'src'),
      {}
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    })
  ]
}
