
//https://github.com/babel/babel/blob/master/packages/babel-traverse/test/replacement.js
import generate from "@babel/generator";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import { writeFile } from "src/utils";
export function parseCode(code: string) {
	// 解析代码
	let result = parse(code, {
		sourceType: 'module',
		plugins: ['jsx', 'typescript']
	});
	return result;
}
export function updateCode(fileAST: any, filePath) {
	traverse(fileAST, {
		enter(path) {
			console.log(path.node.type)
			if (
				path.node.type === "ImportDeclaration" &&
				path.node.source.value === "@typescript-eslint/parser"
			) {
				path.node.source.value = "ttt-update";
			}

			if (
				path.node.type === "JSXElement" &&
				path.node.openingElement.name.type === 'JSXIdentifier' && path.node.openingElement.name.name === 'abc'
			) {
				path.node.openingElement.name.name = "ttt-update";
			}

			if (
				path.node.type === "JSXElement" &&
				path.node.closingElement.name.type === 'JSXIdentifier' && path.node.closingElement.name.name === 'abc'
			) {
				path.node.closingElement.name.name = "ttt-update";
			}


		},
		FunctionDeclaration(path) {

			console.log(333)
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
	writeFile(filePath, output.code);
}