var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
module.exports = {
  entry: {
          calendar:'./src/js/components/calendar.jsx',
          react:['react']
        },
  output: {
        path:'./assets/js',
        filename: '[name].js'
  },
    module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules' }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name:['react'],
      minChunks:Infinity
    })
  ]
}
