export const imports = {
  'no-duplicate-imports': 'error',
  'no-restricted-exports': ['error', { restrictDefaultExports: { direct: true } }],
  'sort-imports': 'error',

  '@typescript-eslint/consistent-type-exports': [
    'error',
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
};
