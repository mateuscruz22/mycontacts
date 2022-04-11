module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        semi: 0,
        indent: [2, 4],
        camelcase: 'off',
        'class-methods-use-this': 'off',
        'no-promise-executor-return': 'off',
    },
};
