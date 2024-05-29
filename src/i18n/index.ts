
const vfs = require('vinyl-fs');
const sort = require('gulp-sort');
const scanner = require('i18next-scanner');

import config from './i18next.config';
import { transform } from './transeform';


vfs.src(['/Users/lowinwu/project/cswuxiang/ast-babel/src/i18n/**/*.{jsx,js}'])
	.pipe(sort()) // Sort files in stream by path
	.pipe(scanner.createStream(config, transform))
	.pipe(vfs.dest('/Users/lowinwu/project/cswuxiang/ast-babel/src/i18n'));