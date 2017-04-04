var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler,{
  hot:true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('*',function(req,res){
  res.render('index.ejs');
})

app.listen(3000,()=>{
  console.log('server runing');
})
