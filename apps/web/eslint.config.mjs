import webConfig from 'eslint-config/web.config.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [{ ignores: ['.next/**', '!.storybook/**'] }, ...webConfig];

export default config;
