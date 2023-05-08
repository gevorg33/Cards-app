module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    babelOptions: {
      presets: [['babel-preset-react-app', false]],
    },
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:prettier/recommended',
    'standard-react',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:yaml/recommended',
    'prettier'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '!.*.json',
    '.eslintrc.js',
    'esbuild.js',
    'jest.*.js',
    'tailwind.*.js',
    'webpack.*.js',
    'tsconfig.json',
    '.yarn/',
    'dist/',
    'node_modules/',
    'manifest.json',
    'package.json'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'off',
  },
};
