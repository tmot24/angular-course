import * as eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tsEslint from 'typescript-eslint';
import angular from 'angular-eslint';

export default  defineConfig([
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tsEslint.configs.recommended,
      tsEslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'PropertyDefinition[value.type="ArrowFunctionExpression"]',
          message: 'Do not use arrow functions as class methods in Angular components',
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    rules: {},
  }
]);
