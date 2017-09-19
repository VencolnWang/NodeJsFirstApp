/****************************************************************/
/*                                                              */
/*                   koa 2.0  middleware                        */
/*                                                              */
/****************************************************************/

const Koa = require('koa');
// 引入自定义的checkUser模块，使用函数checkUserPermission
var checkUserPermission = require('./my_modules/checkUser');
const app = new Koa();
app.use(async (ctx, next) => {
	console.log(ctx.request.method + ', ' + ctx.request.url); // 打印URL
	await next(); // 调用下一个middleware	
});

app.use(async (ctx, next) => {
	const start = new Date().getTime(); // 当前时间
	await next(); // 调用下一个middleware
	const ms = new Date().getTime() - start; // 耗费时间
	console.log('Time : ' + ms + ' ms'); // 打印耗费时间
});

// 这个middleware没有调用await next() ，其后的中间件将不被执行
app.use(async (ctx, next) => {
	if(await checkUserPermission(ctx)){
		await next();
	} else {
		ctx.response.status = 403;
	}
});

app.use(async (ctx, next) => {
	await next();
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1>Hello koa2 !</h1>';
});

app.listen(8080);
console.log('app started at port 8080....');












