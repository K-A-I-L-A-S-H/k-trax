module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
	ignorePatterns: ['.eslintrc.js'],
  plugins: ["react", "@typescript-eslint", "prettier"],
	overrides: [
		{
			files: [
				'**/*.spec.ts',
				'**/*.spec.tsx',
				'**/tests/*.*',
				'__mocks__/**/*.*',
			],
			extends: ['@tool-belt/eslint-config'],
		},
	],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
	settings: {
		'import/resolver': {
			typescript: {
				project: '.',
			},
		},
	},
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
		project: 'tsconfig.json',
    sourceType: "module",
  },
  rules: {
		'@typescript-eslint/no-extraneous-class': 0,
		'@typescript-eslint/no-magic-numbers': 0,
		'@typescript-eslint/no-unsafe-enum-comparison': 0,
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '(?!IOS)(^I[A-Z])',
					match: false,
				},
			},
		],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "consistent-return": "off",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react/jsx-filename-extension": "off",
    "prettier/prettier": "warn",
  },
};