
import sha1 from 'sha1';
export default {
	func: {
		list: ['i18next.t', 'i18n.t'],
		extensions: ['.js', '.jsx']
	},
	trans: {
		fallbackKey: (ns, value) => {
			return sha1(value); // return a sha1 as the key
		},
		component: 'Trans',
		defaultsKey: 'defaults',
		extensions: ['.js', '.jsx'],
		supportBasicHtmlNodes: true,
		acorn: {
			ecmaVersion: 2020,
			sourceType: 'module', // defaults to 'module'
			// Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
		}
	},
	lngs: ['zh', 'en'], // supported languages
	resource: {
		// the source path is relative to current working directory
		loadPath: '',

		// the destination path is relative to your `gulp.dest()` path
		savePath: './{{lng}}/{{ns}}.json'
	}
}