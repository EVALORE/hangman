export const functions = {
  'array-callback-return': 'error',
  'arrow-body-style': ['error', 'as-needed'],
  'func-name-matching': ['error', 'always'],
  'func-names': ['error', 'as-needed'],
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'consistent-return': 'error',
  'max-lines-per-function': [
    'error',
    {
      max: 40,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    },
  ],
  'max-nested-callbacks': ['error', 3],
  'max-params': ['error', 3],
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],
  'no-extra-bind': 'error',
  'no-loop-func': 'error',
  'no-new-func': 'error',
  'no-param-reassign': 'error',
  'no-return-assign': 'error',
  'no-useless-return': 'error',
  'prefer-arrow-callback': 'error',
};
