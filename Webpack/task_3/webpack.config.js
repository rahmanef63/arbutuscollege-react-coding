const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Ensure mode is set to 'development'
  entry: {
    header: './modules/header/header.js', // Ensure entry points are correctly set
    body: './modules/body/body.js', // Example entry point
    footer: './modules/footer/footer.js' // Example entry point
  },
  output: {
    filename: '[name].bundle.js', // Ensure output filename is set correctly
    path: path.resolve(__dirname, 'public') // Ensure path is set correctly
  },
  devtool: 'inline-source-map', // Ensure devtool is set to 'inline-source-map'
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // Ensure contentBase is set correctly
    port: 8564 // Ensure port is set correctly
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // Ensure template file is set correctly
    }),
    new CleanWebpackPlugin() // Ensure CleanWebpackPlugin is used
  ],
  optimization: {
    splitChunks: {
      chunks: 'all' // Ensure chunks are set to 'all'
    }
  }
};

