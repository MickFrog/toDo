const path = require('path');

module.exports = {
    entry: './src/index.js',
    // devtool: 'inline-source-map', //remove after devt to improve web performance
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
}