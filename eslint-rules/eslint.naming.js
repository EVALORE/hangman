export const naming = {
  'id-denylist': ['error' ,'listener', 'error', 'callback', 'cb', 'next', 'data', 'a', 'b', 'x', 'e', 'err'],
  'id-length': ['error', { min: 3, max: 30, properties: 'never' }],
  // 'id-match': ['error', '^[a-z]+([A-Z][a-z]+)*$'],

  camelcase: 'error',
  'no-underscore-dangle': [
    'error',
    {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    },
  ],
  'no-useless-rename': 'error',
};
