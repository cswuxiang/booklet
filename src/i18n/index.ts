
const vfs = require('vinyl-fs');
const sort = require('gulp-sort');
const scanner = require('i18next-scanner');
import path from 'path';
import config from './config/i18next.config';
import { transform } from './config/transeform';

console.log(path.join(__dirname, '/test/*.{jsx,js}'));

vfs.src([path.join(__dirname, '/test/*.{jsx,js}'),])
	.pipe(sort()) // Sort files in stream by path
	.pipe(scanner.createStream(config, transform))
	.pipe(vfs.dest(path.join(__dirname, "/local")));