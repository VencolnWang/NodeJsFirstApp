
/****************************************************************/
/*                                                              */
/*                       url和path模块                          */
/*                                                              */
/****************************************************************/

/*
'use strict'

var url = require('url');
var urlData = url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash');
console.log(urlData);

var path = require('path');
// 解析当前目录
var workDir = path.resolve('.');
console.log('workDir:' + workDir); // E:\NodeJs\FirstApp\baseModule
// 组合完整的文件路径：当前目录 + 'pub' + 'index.html'
var filePath = path.join(workDir, 'pub', 'index.html');
console.log('filePath: ' + filePath);
// E:\NodeJs\FirstApp\baseModule\pub\index.html
*/

/****************************************************************/
/*                                                              */
/*                          文件服务器                          */
/*                                                              */
/****************************************************************/
'use strict'
var fs = require('fs'),
	url = require('url'),
	path = require('path'),
	http = require('http');
// 从命令行参数获取root目录，默认是当前目录
var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir : ' + root);
// 创建服务器
var server = http.createServer(function (request, response){
	// 获取url的path， 类似'/css/bootstrap.css'
	var pathname = url.parse(request.url).pathname; // 类似URI
	console.log('pathname:' + pathname);
	// 获得对应的本地文件路径
	var filepath = path.join(root, pathname);
	console.log('filepath:' + filepath);
	// 获取文件状态
	fs.stat(filepath, function(err, stats){
		if(!err && stats.isFile()){
			// 没有出错并且文件存在
			console.log('200' + request.url);
			// 发送响应状态码200
			response.writeHead(200);
			// 将文件流导向response
			var rs = fs.createReadStream(filepath);
			rs.pipe(response);
		} else {
			// 出错了或者文件不存在
			console.log('404' + request.url);
			// 发送404响应码
			response.writeHead(404);
			response.end('404 Not Found');
		}
	});
});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
/*
没有必要手动读取文件内容。由于response对象本身是一个Writable Stream，
直接用pipe()方法就实现了自动读取文件内容并输出到HTTP响应。
在命令行运行node file_server.js /path/to/dir，把/path/to/dir改成你本
地的一个有效的目录，然后在浏览器中输入http://localhost:8080/index.html
*/


