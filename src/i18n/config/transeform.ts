import { fallbackKey } from "./key";

const fs = require('fs');

export function transform(file: any, enc: any, done) {
	const parser = this.parser;
	const content = fs.readFileSync(file.path, enc);
	let count = 0;
	parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__', 'i18n.t'] }, (key, options) => {
		options.defaultValue = options.defaultValue; // use key as the value
		console.log('===parseFuncFromString:', fallbackKey("", key))
		parser.set(fallbackKey("", key), options);
		++count;
	});

	parser.parseTransFromString(content, function (key, options, xx) {


		options.defaultValue = options.defaultValue; // use key as the value
		parser.set(fallbackKey("", key), options);
		++count;
	});


	// if (count > 0) {
	// 	console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
	// }

	done();
}