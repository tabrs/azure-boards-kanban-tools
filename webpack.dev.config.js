const { merge } = require("webpack-merge");
const CommonConfig = require("./webpack.base.config");
const path = require('path');

// Configuration
module.exports = merge(CommonConfig, {
  mode: 'development',
  output: {
    publicPath: "https://localhost:9090/dist"
  },
  devServer: {
    https: true,
    port: 9090,
    open: true,
    // contentBase: path.resolve(__dirname, '../dist'),
    static: {
      // directory: path.join(__dirname, 'dist'),
      directory: path.resolve(__dirname, 'dist'),
    },
  },
  stats: {
    logging: 'verbose',
    warnings: false,
  }
});
