const types = require("@babel/types");

const result = [];

let t = 0;
let Trans = 0;

function isT(node) {
	if (types.isCallExpression(node)) {
		// t()
		if (types.isIdentifier(node.callee) && node.callee.name === "t") {
			return true;
		}
		// i18n.t()
		if (
			types.isMemberExpression(node.callee) &&
			types.isIdentifier(node.callee.object) &&
			types.isIdentifier(node.callee.property) &&
			node.callee.object.name === "i18n" &&
			node.callee.property.name === "t"
		) {
			return true;
		}
	}
	return false;
}

function isTrans(node) {
	// <Trans>
	if (
		types.isJSXElement(node) &&
		types.isJSXOpeningElement(node.openingElement) &&
		types.isJSXIdentifier(node.openingElement.name) &&
		node.openingElement.name.name === "Trans"
	) {
		return true;
	}
	return false;
}

function hasUnmarkedChineseCharacters(str) {
	if (!t && !Trans && /[\u4e00-\u9fa5]/.test(str)) {
		return true;
	}
	return false;
}

const Checker = ({ filepath }) => {
	/**
	 * @type {import('babel-core').Visitor}
	 */
	const visitor = {
		CallExpression: {
			enter({ node }) {
				if (isT(node)) {
					t++;
				}
			},
			exit({ node }) {
				if (isT(node)) {
					t--;
				}
			},
		},
		JSXElement: {
			enter({ node }) {
				if (isTrans(node)) {
					Trans++;
				}
			},
			exit({ node }) {
				if (isTrans(node)) {
					Trans--;
				}
			},
		},
		JSXText: ({ node }) => {
			if (hasUnmarkedChineseCharacters(node.value)) {
				result.push({ filepath, loc: node.loc, value: node.value });
			}
		},
		StringLiteral: ({ node }) => {
			if (hasUnmarkedChineseCharacters(node.value)) {
				result.push({ filepath, loc: node.loc, value: node.value });
			}
		},
		TemplateElement: ({ node }) => {
			if (hasUnmarkedChineseCharacters(node.value.raw)) {
				result.push({ filepath, loc: node.loc, value: node.value.cooked });
			}
		},
	};
	return visitor;
};

module.exports = { Checker, unmarked: result };