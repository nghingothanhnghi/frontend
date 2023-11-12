# React + TypeScript + Vite
React version ^18.2.15
# Requirement Software for run on localhost
+ Node.js -- v20.9.0
+ Visual Code for Window

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. Beside i've also installed some plugins develop the frontend regularly as
- React Router [Tutorial for install](https://reactrouter.com/en/main/start/tutorial)
- Axios. Call API [Tutorial for install](https://www.npmjs.com/package/axios#example)
- Tailwind CSS. [Tutorial for install here](https://tailwindcss.com/docs/guides/vite). And also install Tailwind UI for React depends on [Headless UI](https://headlessui.dev/) to power all of the interactive behavior and [Heroicons](https://heroicons.com/) for icons, so you'll need to add these two libraries to project. You need some reference class from Tailwind, can get this [link](https://nerdcave.com/tailwind-cheat-sheet) and reference components with [link](https://flowbite.com/docs/components/jumbotron/)

# Start
In the project root directory, you can run:
<pre>npm install</pre>
<pre>npm run dev</pre>

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
