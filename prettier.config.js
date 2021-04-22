// prettier.config.js or .prettierrc.js
module.exports = {
	trailingComma: 'es5', // 多行时使用尾后逗号，默认为"es5"
	tabWidth: 4, // 缩进宽度，默认为2
	printWidth: 80, // 列宽，默认为80
	useTabs: true, // 是否使用tab缩进，默认为false
	semi: false, // 是否使用分号，默认为true
	singleQuote: true, // 是否用单引号来表示string类型，默认为false
	bracketSpacing: true, // 是否在对象字面量的两个花括号内侧使用空格作为间隔，默认为true
	arrowParens: 'always', // 是否使用箭头函数的参数，默认为"always"
	proseWrap: 'always', // markdown折行
	htmlWhitespaceSensitivity: 'css', // 是否使用空白字符格式化HTML文件
}
