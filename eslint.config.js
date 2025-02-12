import js from '@eslint/js';
import nextPlugin from 'eslint-config-next';
import prettierPlugin from 'eslint-plugin-prettier';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [
  js.configs.recommended,
  nextPlugin,
  {
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
      tailwindcss: tailwindPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'simple-import-sort': simpleImportSortPlugin
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ],
      'sort-imports': 'off',
      'tailwindcss/no-custom-classname': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'simple-import-sort/imports': [
        2,
        {
          groups: [
            ['^.+\\.s?css$'],
            [
              `^(${require('module').builtinModules.join('|')})(/|$)`,
              '^react',
              '^@?\\w'
            ],
            ['^components(/.*|$)'],
            ['^lib(/.*|$)', '^hooks(/.*|$)'],
            ['^\\.']
          ]
        }
      ]
    },
    settings: {
      tailwindcss: {
        callees: ['cn'],
        config: 'tailwind.config.js'
      }
    }
  }
]; 