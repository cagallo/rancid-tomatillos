module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	"settings": {
    "react": {
      "version": "detect"
    }
  },
	'extends': [
		'eslint:recommended',
		'plugin:cypress/recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 13,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'semi': ['error', 'always', { 'omitLastInOneLineBlock': true}],
    'eqeqeq': ['error', 'always'],
    'brace-style': 'error',
    'comma-spacing': ['warn', { 'before': false, 'after': true }],
    'curly': 'error',
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    'indent': ['warn', 2],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'linebreak-style': ['error', 'unix'],
    'new-cap': ['error', { 'newIsCap': true }],
    'object-shorthand': ['error', 'always'],
    'space-before-blocks': ['error', { 'functions': 'always', 'keywords': 'always', 'classes': 'always' }],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'jsx-quotes': ['error', 'prefer-double'],
    'quotes': ['error', 'single']
	}
};
