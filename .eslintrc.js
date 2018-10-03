module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: 'airbnb',
  plugins: ['react'],
  settings: {
    'import/parser': 'babel-eslint',
    ecmaFeatures: {
      classes: true,
      jsx: true,
    },
  },
};
