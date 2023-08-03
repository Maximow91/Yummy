module.exports = {
  root: true,
  extends: '@react-native',
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        '@babel/plugin-syntax-import-assertions'
      ],
    },
  },
};
