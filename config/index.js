/**
 * config index
 * @authors luoyjx (yjk99@qq.com)
 * @date    2016-08-29 21:11:08
 */

var env = process.env.NODE_ENV === 'production' 
  ? 'production' 
  : process.env.NODE_ENV === 'test' ? 'test' : 'development';

var path = __dirname + '/env/' + env;

module.exports = require(path);