/****************************************************************/
/*                                                              */
/*                       koa 2.0                                */
/*                                                              */
/****************************************************************/

// 导入koa，和koa1.0不同，在koa2中，我们导入的是一个class，因此用几个Koa表示（K大写的）
const Koa= require('koa');
 // 创建一个Koa对象表示web app本身
const app = new Koa();
 // 对于任何请求，app将调用该异步函数处理请求
app.use(async (ctx, next) => {
	 await next();
	 ctx.response.type = 'text/html';
	 ctx.response.body = '<h1>Hello Koa2!</h1>';
 });
 
 // 监听端口8080
 app.listen(8080);
 console.log('app started at port 8080....');

 /*
对于每一个http请求，koa将调用我们传入的异步函数来处理：
async (ctx, next) => {
    await next();
    // 设置response的Content-Type:
    ctx.response.type = 'text/html';
    // 设置response的内容:
    ctx.response.body = '<h1>Hello, koa2!</h1>';
}
其中，参数ctx是由koa传入的封装了request和response的变量，我们可以通
过它访问request和response，next是koa传入的将要处理的下一个异步函数。
上面的异步函数中，我们首先用await next();处理下一个异步函数，然后，
设置response的Content-Type和内容。
*/



