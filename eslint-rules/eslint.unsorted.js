export const unsorted = {
  'capitalized-comments': ['warn', 'always'],
  'no-inline-comments': 'error',

  'block-scoped-var': 'error',
  'no-lone-blocks': 'error',
  'max-depth': ['error', 3],
  complexity: ['error', 5],

  'no-eval': 'error',
  'no-implied-eval': 'error',
  'no-script-url': 'error',

  'no-promise-executor-return': 'error',
  'require-atomic-updates': 'error',

  'no-label-var': 'error',
  'no-labels': 'error',

  'no-iterator': 'error',
  'no-proto': 'error',

  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message:
        'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
    },
    {
      name: 'isNaN',
      message:
        'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
    },
  ],
  // Disallow certain object properties
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'ForOfStatement',
      message:
        'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],

  'dot-notation': 'error',
  'no-template-curly-in-string': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-div-regex': 'error',
  'no-extend-native': 'error',
  // !! to Boolean()
  'no-implicit-coercion': 'error',
  'no-invalid-this': 'error',
  // !!!
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-array-constructor': 'error',
  'no-new-wrappers': 'error',
  'no-object-constructor': 'error',
  'no-plusplus': 'error',
  'no-sequences': 'error',
  // 'no-shadow': 'error',
  'no-throw-literal': 'error',
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],
  'one-var': ['error', 'never'],
  'operator-assignment': ['error', 'always'],
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: true,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: true,
      },
    },
  ],
  'prefer-exponentiation-operator': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'prefer-template': 'error',
  'require-await': 'error',
  'vars-on-top': 'error',
  yoda: 'error',

  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/no-confusing-void-expression': 'error',
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-shadow': 'error',
};
