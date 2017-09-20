/****************************************************************/
/*                                                              */
/*                   koa 2.0  MVC模式重构                       */
/*                                                              */
/****************************************************************/
'use strict'

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
// 由于middleware的顺序很重要，这个koa-bodyparser必须在router之前被注册到app对象上。
app.use(bodyParser());

// 注册路由
const controller = require('./controller/controller');
app.use(controller(__dirname));
app.listen(8080);
console.log('app start at port 8080 ...');
