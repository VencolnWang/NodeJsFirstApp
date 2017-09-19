'use strict'

// 引入hello模块，也就是hello.js文件
// greet 是模块的函数名
var greet = require('./hello'); // 一定要写路径
var s = 'Vencoln';
greet(s);
