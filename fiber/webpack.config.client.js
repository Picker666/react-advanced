const path = require('path');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const swp = new SpeedMeasureWebpackPlugin();

module.exports = swp.wrap({
  // target: "web",
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
})