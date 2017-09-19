/****************************************************************/
/*                                                              */
/*                       Express                                */
/*                                                              */
/****************************************************************/
// Express是第一代最流行的web框架，它对Node.js的http进行了封装。
// koa是Express的下一代基于Node.js的web框架，目前有1.x和2.0两个版本。

// Express使用实例
var express = require('express');
var app = express();

// 使用中间件express.static来设置静态文件
app.use(express.static('image'));

// * 表示任何请求
/*
app.get('*', function(req, res){ 
	res.send('Hello world!');
});
*/

// GET方式 访问8080端口有效
app.get('/', function (req, res){
	console.log('主页 GET 请求!');
	res.send('Hello GET');
});

// post方法访问8080端口有效
app.post('/', function(req, res){
	console.log('主页 POST 请求!');
	res.send('Hello POST');
});

// 响应http://127.0.0.1:8080/del_user
app.get('/del_user', function(req, res){
	console.log('/del_user 响应DELETE求情');
	res.send('删除页面');
});

var server = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening on port 8080!');
	console.log('访问地址：http://%s:%s', host, port);
});
// 虽然Express的API很简单，但是它是基于ES5的语法，要实现异步代码，
// 只有一个方法：回调。如果异步嵌套层次过多，代码写起来就非常难看。















