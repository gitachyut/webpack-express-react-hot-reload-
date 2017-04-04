var webpack = require('webpack');
var path  = require('path');
module.exports = {
  devtool : 'inline-source-map',
  entry : [
    'webpack-hot-middleware/client',
    'webpack/hot/dev-server',
    path.join(__dirname,'/public/script.js')
  ],
  output : {
    path : path.join(__dirname,'/public'),
    filename: "bundle.js",
    publicPath : '/'
  },
  plugins:[
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader:'babel-loader',
        query:{
          presets:['es2016','stage-2','react','react-hmre']
        }
      },
      {
        test: /\.css$/,
        exclude : /(node_modules)/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}
