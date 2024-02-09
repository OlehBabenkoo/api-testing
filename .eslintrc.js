module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true
            }
        ],
        'no-trailing-spaces': 'error',
        '@typescript-eslint/typedef': [
            'error',
            {
                'parameter': true
            }
        ],
        '@typescript-eslint/semi': [
            'error'
        ],
        '@typescript-eslint/explicit-function-return-type': ['error']
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
};