import * as fs from 'fs';
import { getCurDir } from 'src/utils';
import { parseCode, updateCode } from './lib';

const code = fs.readFileSync(getCurDir() + "/src/ast/test/demo.tsx", 'utf-8');

let ast = parseCode(code);
updateCode(ast, getCurDir() + "/src/ast/test/demo-update.tsx");

