module.exports = function () {
	return {
		visitor: {
			FunctionDeclaration(path) {
				const scope = path.scope;

				// 获取函数参数的名称
				const paramNames = path.node.params.map(param => param.name);
				console.log(`函数参数: ${paramNames.join(', ')}`);

				// 或者，遍历作用域中的所有参数绑定
				for (const name in scope.bindings) {
					if (scope.bindings[name].kind === 'param') {
						console.log(`参数: ${name}`);
					}
				}
			},
		},
	};
};