var ttt = i18n.t("腾讯云");
var ttt = "aa";
function square(n) {
	return n * n;
}
export function aa() {
	return <Trans><div className="asdfasf">中华人名共和国<p style="{{ color:'red'}" > 你们好啊</p></div></Trans>
}

export function bb() {
	return <Trans><div className="asdfasf">中华人xs名共和国<p style="{{ color:'red'}" > 你43们好啊</p></div></Trans>
}

/**
 * 
 * 给定一串html,得到的结果为将标签转换位了数字，如<div className="asdfasf">中华人xs名共和国<p style="{{ color:'red'}" > 你43们好啊</p></div>  转换为<0>中华人xs名共和国<1> 你43们好啊</1></0>； 写一段JS程序将<0>映射为第一个标签，依次类推，

 * @param {*} html 
 * @returns 
 */
function convertHtmlToNumberedTagsWithAttributes(html) {
	let tagCounter = 0;
	const tagMap = new Map();

	// 使用正则表达式匹配开始标签及其属性
	const tagStartPattern = /<([a-z][a-z0-9]*)\b([^>]*)>/gi;

	// 替换函数，用于转换开始标签为数字序号并构建映射
	function replaceStartTag(match, tagName, attributes) {
		tagCounter++;
		// 保留属性，但需注意这里简化处理了属性值可能包含引号或特殊字符的情况
		tagMap.set(tagCounter, `<${tagName}${attributes}>`);
		return `<${tagCounter}>`;
	}

	// 先转换开始标签，因为我们只需要替换开始标签为数字
	let convertedHtml = html.replace(tagStartPattern, replaceStartTag);

	// 现在处理结束标签，直接替换为对应的数字序号
	// 注意：此处简化处理，假设标签是平衡的且没有嵌套标签使用相同的序号
	convertedHtml = convertedHtml.replace(/<\/([a-z][a-z0-9]*)>/gi, (match, tagName) => {
		const openTagKey = Array.from(tagMap.keys()).find(key => tagMap.get(key).endsWith(`</${tagName}>`));
		return openTagKey ? `</${openTagKey}>` : match; // 简化处理，实际应确保总能找到匹配
	});

	// 返回转换后的HTML和映射关系
	return { convertedHtml, tagMap };
}
