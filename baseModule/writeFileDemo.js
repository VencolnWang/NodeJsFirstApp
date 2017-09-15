
/*****************************************************/
/*                                                   */
/*                       写文件                      */
/*                                                   */
/*****************************************************/
// 写文件。 fs.writeFile()
'use strict';

var fs = require('fs');

var data = 'Hello Node.js';
//writeFile()的参数依次为文件名、数据和回调函数。
//如果传入的数据是String，默认按UTF-8编码写入文本文件，如果传入的参数是Buffer，
//则写入的是二进制文件。回调函数由于只关心成功与否，因此只需要一个err参数。
/*
fs.writeFile('output.txt', data, function(err){
	if(err){
		console.log(err);
	} else {
		console.log('write successfully! \r\n');
	}
});
*/

// 同步写入文件
data = 'Synchronous write! \r\n';
fs.writeFileSync('output.txt', data);



/*****************************************************/
/*                                                   */
/*                stat 获取文件信息                  */
/*                                                   */
/*****************************************************/
'use strict'

var fs = require('fs');
fs.stat('output.txt', function(err, stat){
	if(err){
		console.log(err);
	} else {
		// 是否是文件
		console.log('isFile : ' + stat.isFile());
		// 是否是目录
		console.log('isDirectory:' + stat.isDirectory());
		if(stat.isFile()){
			// 文件大小
			console.log('size:' + stat.size);
			// 文件创建时间，Date对象
			console.log('birth time:' + stat.birthtime);
			// 文件修改时间，Date对象
			console.log('modified time: ' + stat.mtime);
		}
	}
});

// stat()也有一个对应的同步函数statSync()
var stat = fs.statSync('output.txt');
// 是否是文件
console.log('isFile : ' + stat.isFile());
// 是否是目录
console.log('isDirectory:' + stat.isDirectory());
if(stat.isFile()){
	// 文件大小
	console.log('size:' + stat.size);
	// 文件创建时间，Date对象
	console.log('birth time:' + stat.birthtime);
	// 文件修改时间，Date对象
	console.log('modified time: ' + stat.mtime);
}
