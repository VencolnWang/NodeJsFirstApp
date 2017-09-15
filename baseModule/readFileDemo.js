'use strict'

// 引入fs模块
var fs = require('fs');

// 异步读取一个文本文件，异步读取函数要接收一个回调函数
// 另外需要指定文件路径和字符集
fs.readFile('./temp.txt', 'utf-8', function(err, data){
	if(err){
		console.log(err);
	} else {
		console.log('异步读取temp.txt文件:');
		console.log(data);
		console.log('\r\n');
	}
});

// 读取二进制文件，不需要传入文件编码，回调函数的data参数将返回一个Buffer对象。
// Node.js中，Buffer对象是一个包含0个或者任意多个字节的数组，但是它和Array不同。
fs.readFile('./Tulips.jpg', function(err, data){
	if(err){
		console.log('读取图片出错!');
	} else {
		console.log('图片大小：' + data.length);
		console.log('\r\n');
	}
});

// Buffer
// Buffer对象可以和String作转换，例如把一个Buffer转换成String
var data = fs.readFileSync('temp.txt', 'utf-8');
var s = data.toString('utf-8');
console.log(s);
// String转换成Buffer对象
var buf = Buffer.from(s, 'utf-8');
console.log(buf);


// 同步读取一个文本文件，同步读取函数不接受回调。
// 同步读取函数直接把读取到的数据返回给调用者。
/*
var data = fs.readFileSync('./temp.txt', 'utf-8');
console.log(data);
*/
try{ // 使用try-catch可以捕获错误
	var data = fs.readFileSync('temp.txt', 'utf-8');
	console.log('同步读取temp.txt文件: ');
	console.log(data);
	console.log('\r\n');
} catch (err){
	// 出错了
	console.log('出错了呀');
}


