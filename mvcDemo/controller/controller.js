/****************************************************************/
/*                                                              */
/* koa 2.0  MVC模式重构                                         */
/* 描述：                                                       */
/* 把controller处理部分从app.js分离出来，作为中间件。它负责解析 */
/* 处理URL请求的js文件，并把相应的路径-函数映射添加到路由，最终 */
/* 返回路由router。                                             */
/****************************************************************/
'use strict'

const fs = require('fs');

function addMapping(router, mapping){
	// url 是exports暴露出来的属性名，属性值是function
	// 遍历mapping的属性
	for(var url in mapping){
		if(url.startsWith('GET')){ // 处理GET请求
			// 如果url类似"GET xxx"
			var path = url.substring(4);
			// 添加一个路由
			router.get(path, mapping[url]);
			console.log('register URL mapping: GET: ' + path);
		} else if (url.startsWith('POST')){
			// 如果URL类似'POST xxx'
			var path = url.substring(5);
			router.post(path, mapping[url]);
			console.log('register URL mapping: POST ' + path);
		} else {
			// 无效的URL
			console.log('invalid URL:' + url);
		}
	}
}

function addControllers(router, dir){
	// 同步读取js文件
	// dir 是app.js在当前系统中的目录
	var files = fs.readdirSync(dir + '/controller');
	// 过滤出.js文件
	var js_files = files.filter((f) => {
		return f.endsWith('.js');
	});

	// 处理每个js文件
	for(var f of js_files){
		console.log('process controller:' + f );
		// 导入js文件（引用自定义的模块），得到exports对象
		let mapping = require(dir + '/controller/' + f);
		addMapping(router, mapping);
	}
}

// dir : app.js所在的目录
module.exports = function(dir){
	let controller_dir = dir || 'controller';
	// 引入koa-router模块
	let router = require('koa-router')();
	addControllers(router, controller_dir);
	return router.routes(); 
};