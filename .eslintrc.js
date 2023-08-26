require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "vue/order-in-components": [
      "error",
      {
        order: [
          "name",
          "components",
          "directives",
          "extends",
          "mixins",
          ["provide", "inject"],
          "inheritAttrs",
          "model",
          "props",
          "emits",
          "setup",
          "data",
          "computed",
          "watch",
          "methods"
        ]
      }
    ],
    "vue/require-prop-types": "error",
    "vue/prop-name-casing": ["error", "camelCase"],
    "vue/custom-event-name-casing": ["error", "camelCase"],
    "vue/no-duplicate-attr-inheritance": "error",
    "vue/this-in-template": ["error", "never"],
    "vue/v-on-style": ["error", "shorthand"],
    "vue/no-multi-spaces": "error",
    "vue/padding-line-between-blocks": "error",
    "vue/block-order": [
      "error",
      {
        order: ["script", "template", "style"]
      }
    ],
    "vue/v-bind-style": "error",
    "vue/v-slot-style": ["error", "shorthand"]
  }
}
