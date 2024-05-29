import { parse, traverse } from '@babel/core';
import generate from '@babel/generator';
import { readFileSync } from 'fs';
import { getCurDir, writeFile } from './utils';

const code = readFileSync('/Users/lowinwu/project/cswuxiang/ast-babel/src/test/demo.js', 'utf-8')
function parseCode(code: string) {
	// 解析代码
	let result = parse(code, {
		sourceType: 'module',
		plugins: ['@babel/plugin-transform-typescript']
	});
	return result;
}
function updateCode(fileAST: any) {
	traverse(fileAST, {
		enter(path) {
			console.log(path.node.type)
			if (
				path.node.type === "ImportDeclaration" &&
				path.node.source.value === "@typescript-eslint/parser"
			) {
				path.node.source.value = "ttt-update";
			}
		}
	});

	// 生成新的代码
	let code = ""
	const output = generate(
		fileAST,
		{
			/* options */
		},
		code
	);
	writeFile(`${getCurDir()}/src/test/demo-update.js`, output.code);
}
// let ast = parseCode(code);
// updateCode(ast);

