/****************************************************************/
/*                                                              */
/*                   koa 2.0  router路由                        */
/*                                                              */
/****************************************************************/
'use strict'

const Koa = require('koa');

// 注意 require('koa-router')返回的是函数
const router = require('koa-router')();
const app = new Koa();

// 显示请求URL
app.use(async (ctx, next) => {
	console.log(ctx.request.method + ', ' + ctx.request.url); // 打印URL
	await next(); // 调用下一个middleware	
});

// add url-route
router.get('/hello/:name', async (ctx, next) => {
	var name = ctx.params.name;
	ctx.response.body = '<h1>Hello ' + name + ' !</h1>';
});

router.get('/', async (ctx, next) => {
	ctx.response.body = '<h1>Index</h1>';
});

// 添加路由中间件
app.use(router.routes());

app.listen(8080);
console.log('app started at port 8080....');

