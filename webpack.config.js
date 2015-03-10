module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'dist/bundle.js',
    path: __dirname
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
}
