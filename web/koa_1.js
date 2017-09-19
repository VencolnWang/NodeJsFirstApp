/****************************************************************/
/*                                                              */
/*                       koa 1.0                                */
/*                                                              */
/****************************************************************/
// 随着新版Node.js开始支持ES6，Express的团队又基于ES6的generator重
// 新编写了下一代web框架koa。和Express相比，koa 1.0使用generator实
// 现异步，代码看起来像同步的：
var koa = require('koa');
var app = koa();
app.use('/test', function *(){
	yield doReadFile1();
	var data = yield doReadFile2();
	this.body = data;
});

var server = app.listen(8080);











