# vue3-mentoring-program

## Project Setup with Vite
```sh
npm init vite@latest
cd <project-name>
npm install
```

### Compile and Hot-Reload for Development
```sh
npm run dev
```

### Storybook
```sh
npx storybook@latest init
npm run storybook
```

### ESLint
```sh
npm install --save-dev eslint eslint-plugin-vue @vue/eslint-config-typescript @rushstack/eslint-patch
```
`eslint-plugin-vue` is an official ESLint plugin for vue.

`@rushstack/eslint-patch` in order to work around a known limitation in ESLint.

1. Create a `.eslintrc.js` file in your projects root directory
2. Add at the beginning of file:
`require("@rushstack/eslint-patch/modern-module-resolution")`
3. Add required configuration options.
4. Add script in package.json:
`"lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"`
5. Configure ESLint in WebStorm to use its code hint:
`Settings > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint` (using Automatic ESLint configuration or Manual ESLint configuration).

### Prettier
```sh
npm install --save-dev eslint-config-prettier prettier
```
`eslint-config-prettier` to turn off all rules that are unnecessary or might conflict with Prettier.

1. Make modifications to .eslintrc.js:
   make sure to put `"prettier"` last to `"extends"` section, so it gets the chance to override other configs.
2. Create a `.prettierrc.js` file and add rules to override the defaults
   3. Add script in package.json:
   `"format": "prettier .  --write"`
4. Configure Prettier in WebStorm to use its format function:
`Settings > Languages & Frameworks > JavaScript > Prettier` (using Automatic ESLint configuration or Manual ESLint configuration).
It is recommended to check an item `Run on save` for files in the settings page, so that the code can be automatically formatted through Prettier when Command + S.
If not check the above configuration, you need to format the code through Command + Option + Shift + P.

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

