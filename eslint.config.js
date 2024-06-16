// @ts-check

import eslint from '@eslint/js';
import { personalRules } from './eslint-rules/eslint.personal-rules.js';
import tsEslint from 'typescript-eslint';

// eslint-disable-next-line no-restricted-exports
export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommendedTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...personalRules,
    },
  },
  {
    files: ['**/*.js'],
    ...tsEslint.configs.disableTypeChecked,
  },
);
