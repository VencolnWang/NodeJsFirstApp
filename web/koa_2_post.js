/****************************************************************/
/*                                                              */
/*                   koa 2.0  处理post请求                      */
/*                                                              */
/****************************************************************/
'use strict'

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

// 注意 require('koa-router')返回的是函数
const router = require('koa-router')();
const app = new Koa();
// 由于middleware的顺序很重要，这个koa-bodyparser必须在router之前被注册到app对象上。
app.use(bodyParser());

// 一个登陆表单
router.get('/', async (ctx, next) => {
	ctx.response.body = '<h1>Index</h1>' 
		+ '<form action="/signin" method="post">'
		+ '<p> Name:<input name="name" value="koa"></p>'
		+ '<p> Password:<input name="password" type="password"></p>'
		+ '<p><input type="submit" value="Submit"></p>'
		+ '</form>';
});

router.post('/signin', async (ctx, next) => {
	var name = ctx.request.body.name || '';
	var password = ctx.request.body.password || '';
	console.log('name: ' + name + ', password: ' + password);
	if(name === 'koa' && password === '123456'){
		ctx.response.body = '<h1>Welcome ' + name + '</h1>';
	} else {
		ctx.response.body = '<h1>Login failed!</h1>'
			+ '<p><a href="/">Try again</a></p>';
	}
});

app.use(router.routes());
app.listen(8080);
console.log('app start at port 8080 ...');
