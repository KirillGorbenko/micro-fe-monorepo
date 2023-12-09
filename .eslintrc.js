module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    projects: [
      './tsconfig.json', './projects/posts-list/tsconfig.json', './projects/host/tsconfig.json', './projects/todo-list/tsconfig.json' 
    ],
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname,
    vueFeatures: {
      filter: true,
      interpolationAsNonHTML: false,
    }
  },
  plugins: [ 'vue',
    '@typescript-eslint' ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    quotes: [ 2, 'single' ],
    'object-property-newline': [ 'error', { 'allowAllPropertiesOnSameLine': false } ],
    semi: 2,
    'vue/html-quotes': [ 'error', 'single' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'comma-spacing': [ 'error', {
      'before': false,
      'after': true
    } ],
    'no-tabs': [ 'error' ],
    'indent': [ 'error', 2 ],
    'max-params': [ 'error', 2 ],
    'no-mixed-spaces-and-tabs': 'error',
    'array-bracket-newline': [ 'error', {
      'multiline': false,
      'minItems': 3
    } ],
    'max-len': [ 'error', { 'code': 120 } ]
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: [
    'src/**/*.test.ts', 'build', 'public', '.idea', 'shims-vue.d.ts', '*.scss', 'tsconfig.json', 'yarn-error.log', 'yarn.lock', '*.json' 
  ]
};