// 编写一个自定义的功能模块

/**
* 检查用户权限
*/
function checkUserPermission(ctx){
	return false;
}

// 把函数作为模块的输出暴露出去，这样其他模块就可以使用函数了。
module.exports = checkUserPermission;