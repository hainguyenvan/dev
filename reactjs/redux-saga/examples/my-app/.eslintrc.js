module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: "standard",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 2,
                outerIIFEBody: 1,
                MemberExpression: 1,
                FunctionDeclaration: { parameters: 1, body: 1 },
                FunctionExpression: { parameters: 1, body: 1 },
                CallExpression: { arguments: 1 },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoreComments: false
            }
        ],
        quotes: ["error", "backtick"],
        semi: ["error", "always"],
        // "max-len": ["error", { "code": 80 }],
        "no-var": "error",
        "space-before-function-paren": ["error", "never"],
        "eol-last": ["error", "never"],
        // dấu, ở cuối trong property cuối cùng của một object
        "comma-dangle": ["error", "never"],
        "promise/param-names": "error"
    }
};