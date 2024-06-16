export const classes = {
  'no-constructor-return': 'error',
  'max-classes-per-file': 'error',
  'grouped-accessor-pairs': 'error',
  'class-methods-use-this': 'error',
  'new-cap': 'error',
  'no-new': 'error',
  'no-useless-constructor': 'error',

  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      overrides: {
        constructors: 'no-public',
      },
    },
  ],
  '@typescript-eslint/member-ordering': 'error',
};
