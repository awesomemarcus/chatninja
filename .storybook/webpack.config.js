var path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        loaders: [
          'style',
          'raw'
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(jpe?g|jpg|gif|png|woff|woff2|eot|ttf|svg)$/,
        loaders: [
          'url?limit=10000',
          'img'
        ],
        include: __dirname
      }
    ]
  }
};
