# vue3-mentoring-program

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

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
eslint-plugin-vue is an official ESLint plugin for vue.
@rushstack/eslint-patch in order to work around a known limitation in ESLint.

Create a .eslintrc.js file in your projects root directory
Add at the beginning of file:
require("@rushstack/eslint-patch/modern-module-resolution")
Add required configuration options.

Add script in package.json:
"lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"

Configure ESLint in WebStorm to use its code hint:
Settings > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint (using Automatic ESLint configuration or Manual ESLint configuration).

### Prettier
```sh
npm install --save-dev eslint-config-prettier prettier
```
eslint-config-prettier to turn off all rules that are unnecessary or might conflict with Prettier.

Make modifications to .eslintrc.js:
make sure to put "prettier" last to "extends" section, so it gets the chance to override other configs.

Create a .prettierrc.js file and add rules to override the defaults
Add script in package.json:
"format": "prettier .  --write"

Configure Prettier in WebStorm to use its format function:
Settings > Languages & Frameworks > JavaScript > Prettier (using Automatic ESLint configuration or Manual ESLint configuration).
It is recommended to check an item Run on save for files in the settings page, so that the code can be automatically formatted through Prettier when Command + S.
If not check the above configuration, you need to format the code through Command + Option + Shift + P.

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
