module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  // globals: {
  //   // DOM (live) 오류 추기
  //   getNode: true,
  //   getNodes: true,
  //   attr: true,
  //   insertLast: true,
  //   getCss: true,
  //   setCss: true,
  //   clearContents: true,
  // },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
  },
};
