
const fs = require('fs');
export function writeFile(path: string, data: string) {
	fs.writeFile(path, data, (err:any) => {
		if (err) throw err;
		console.log('File written successfully.');
	});
}
export function getCurDir() {
    // 获取当前工作目录
    return process.cwd();
}
