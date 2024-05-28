module.exports = {
	extends: [
		"alloy",
		"alloy/typescript",
		"@tencent/eslint-config-tencent",
		"@tencent/eslint-config-tencent/ts",
	],
	plugins: [],
	globals: {},
	ignorePatterns: [
		".eslintrc.js",
		"config/*",
		"scripts/*",
		"build/*",
		"public/*"
	],
	rules: {
		indent: [
			0,
			2,
			{
				SwitchCase: 1,
				flatTernaryExpressions: true,
			},
		],
		"@typescript-eslint/no-require-imports": ["off"],
		"@typescript-eslint/indent": [
			0,
			2,
			{
				SwitchCase: 1,
				flatTernaryExpressions: true,
			},
		],
		"max-nested-callbacks": ["error", 4],
		"no-unused-vars": "off",
		"object-curly-spacing": [2, "always"],
		"block-spacing": [2, "always"],
		"@typescript-eslint/no-unused-vars": [
			"off",
			{
				vars: "all",
				args: "after-used",
				ignoreRestSiblings: false,
			},
		],
		"@typescript-eslint/explicit-member-accessibility": 0,
		"max-len": [
			"error",
			{
				code: 120,
			},
		],
		// "prettier/prettier": [
		//   "error",
		//   {},
		//   {
		//     usePrettierrc: false,
		//   },
		// ],
		"no-debugger": 0,
	},
};