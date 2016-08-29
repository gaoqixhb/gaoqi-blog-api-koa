/**
 * gaoqi-blog-api  -  app.js 
 * @authors luoyjx (yjk99@qq.com)
 * @date    2016-08-28 21:44:01
 */

var app = require('koa')();
var router = require('koa-router')();
var generateApi = require('koa-mongo-rest');

var models = require('./models');

//router is required
app.use(router.routes());

//add REST routes to your app. Prefix is optional
Object.keys(models).forEach(function(modelName) {
  generateApi(app, models[modelName], '/api');
});

app.listen(process.env.PORT || 5000);