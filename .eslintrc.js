module.exports = {
  root: false,
  env: {
    node: true,
    browser: true,
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': 'off',
  }
}

// module.exports = {
//   root: true,
//   parserOptions: {
//     sourceType: 'module'
//   },
//   parserOptions: {
//     "parser": "babel-eslint"
//   },
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//   },

//   extends: [
//     "plugin:vue/essential"
//   ],

//   rules: {
//     'no-console': 'off',
//   }
// }
