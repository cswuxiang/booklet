import { parse } from "@babel/core";
import generate from "@babel/generator";
import traverse from "@babel/traverse";
import { writeFile } from "src/utils";
export function parseCode(code: string) {
	// 解析代码
	let result = parse(code, {
		sourceType: 'module',
		plugins: ['@babel/plugin-transform-typescript']
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