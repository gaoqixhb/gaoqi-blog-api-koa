/**
 * gaoqi-blog-api  -  app.js 
 * @authors luoyjx (yjk99@qq.com)
 * @date    2016-08-28 21:44:01
 */

var app = require('koa')();
var router = require('koa-router')();
var generateApi = require('koa-rest-mongoose');
var bodyParser = require('koa-bodyparser');
var cors = require('kcors');

var models = require('./models');
var authMiddleware = require('./middlewares/auth');

app.use(bodyParser());
app.use(cors({
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,OPTIONS',
  allowHeaders: 'Origin, x-access-token, Content-Type, Accept'
}));
// auth middleware
app.use(authMiddleware.userRequired);


//router is required
app.use(router.routes());

//add REST routes to your app. Prefix is optional
Object.keys(models).forEach(function(modelName) {
  generateApi(app, router, models[modelName], '/api');
});

app.listen(process.env.PORT || 5000);

console.log('server listening on port %s', process.env.PORT || 5000);