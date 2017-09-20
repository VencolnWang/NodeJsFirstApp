/****************************************************************/
/*                                                              */
/*  koa 2.0  使用MVC模式重构6.2项目                             */
/*  描述：                                                      */
/*  index.js里面包含了登录功能相关的url和处理函数。该文件将有   */
/*  controller.js加载。                                         */
/****************************************************************/
'use strict'

const myView = require('../view/indexView');

// 处理路径'/'的请求 
var fn_index = async(ctx, next) => {
	console.log('=======：进入index()');
	myView.index(ctx);
}

// 处理 /signin 的请求
var fn_signin = async(ctx, next) => {
	var name = ctx.request.body.name || '';
	var password = ctx.request.body.password || '';
	console.log('name: ' + name + ', password: ' + password);
	if(name === 'koa' && password === '123456'){
		//ctx.response.body = '<h1>Welcome ' + name + '</h1>';
		myView.hello(ctx);
	} else {
		//ctx.response.body = '<h1>Login failed!</h1>'
			//+ '<p><a href="/">Try again</a></p>';
		myView.loginFailed(ctx);
	}
};

// 把函数暴露出来
module.exports = {
	'GET /':fn_index,
	'POST /signin': fn_signin
};