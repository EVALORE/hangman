export const statements = {
  // Conditionals
  'no-self-compare': 'error',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'no-eq-null': 'error',
  'logical-assignment-operators': ['error', 'always', { enforceForIfStatements: true }],
  'no-else-return': 'error',
  'no-extra-boolean-cast': 'error',
  'no-lonely-if': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-unneeded-ternary': 'error',

  // Switch case
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  'no-extra-label': 'error',

  // For, while, do-while
  'guard-for-in': 'error',
  'no-unreachable-loop': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-await-in-loop': 'error',
  'no-continue': 'error',

  // General
  curly: ['error', 'multi-or-nest', 'consistent'],
};
