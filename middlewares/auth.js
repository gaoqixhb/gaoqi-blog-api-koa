/**
 * auth middleware
 * @authors yanjixiong 
 * @date    2017-02-08 20:25:49
 */

var debug = require('debug')('gaoqi-blog-api-koa:auth');
var User = require('../models').User;

/**
 * 用户权限认证
 */
exports.userRequired = function *userRequired(next) {
  var accessToken = this.query.access_token || this.request.body.access_token || this.headers['x-access-token'];

  debug('accessToken: %s', accessToken);

  if (!accessToken) {
    this.status = 401;
    return this.body = {
      success: false,
      message: '认证失败'
    };
  }

  var userFind = yield User.findOne({ accessToken: accessToken }).exec();

  if (!userFind) {
    this.status = 401;
    return this.body = {
      success: false,
      message: '认证失败'
    };
  }

  yield next;
}