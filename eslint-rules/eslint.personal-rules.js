import { classes } from './eslint.classes.js';
import { debugging } from './eslint.debugging.js';
import { declarations } from './eslint.declarations.js';
import { functions } from './eslint.functions.js';
import { imports } from './eslint.imports.js';
import { naming } from './eslint.naming.js';
import { statements } from './eslint.statements.js';
import { unsorted } from './eslint.unsorted.js';

export const personalRules = {
  ...classes,
  ...debugging,
  ...declarations,
  ...functions,
  ...imports,
  ...naming,
  ...statements,
  ...unsorted,
};
