/****************************************************************/
/*                                                              */
/*  koa 2.0  使用MVC模式重构6.2项目                             */
/*  描述：                                                      */
/*  和controller目录下的index.js对应的视图。                    */
/****************************************************************/
'use strict'

// 返回登录页面
var fn_index = function(ctx){
	ctx.response.body = '<h1>Index</h1>' 
		+ '<form action="/signin" method="post">'
		+ '<p> Name:<input name="name" value="koa"></p>'
		+ '<p> Password:<input name="password" type="password"></p>'
		+ '<p><input type="submit" value="Submit"></p>'
		+ '</form>';
};

// 欢迎页面
var fn_hello = function(ctx){
	var name = ctx.request.body.name || '';
	ctx.response.body = '<h1>Welcome ' + name + '</h1>';
};

var fn_loginFailed = function(ctx){
	ctx.response.body = '<h1>Login failed!</h1>'
		+ '<p><a href="/">Try again</a></p>';
}

// 暴露视图函数
module.exports = {
	'index':fn_index,
	'hello':fn_hello,
	'loginFailed':fn_loginFailed
};