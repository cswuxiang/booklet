const fs = require('fs');
const chalk = require('chalk');


function traverseRecord(node, checker) {

	const ast = parse(content, {
		...babylonOptions,
	});
	traverse(ast, Checker({ filepath }));
}
export function transform(file, enc, done) {
	const parser = this.parser;
	const content = fs.readFileSync(file.path, enc);
	let count = 0;
	parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
		parser.set(key, Object.assign({}, options, {
			nsSeparator: false,
			keySeparator: false
		}));
		++count;
	});

	parser.parseTransFromString(content, function (key, options, xx) {


		console.log(options)
		options.defaultValue = options.defaultValue; // use key as the value
		parser.set(key, options);
		++count;
	});


	if (count > 0) {
		console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
	}

	done();
}