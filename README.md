# Webpack Template

### Environment

The following .env example file is required for the correct work of the application.

```
PORT=3000
```

### Installation

The installation process should be done with `yarn install`.

### Running locally

Application starts with `yarn start` on port 3000.

### Creating production build

To create production build run `yarn build`.\
The build result is additionally gzipped to minimize the file size as much as possible.

### Recommendations

The following IDE extensions are recommended for use.\
[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) is a great help to avoid typos when naming variables and functions.\
To analyze the code and find problems according to the given rules, described in .eslintrc.js file a [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is used.\
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is used to ensure that the overall style of the code is followed throughout the project. This extension is integrated with ESLint, but can have its own rules described in .prettierrc file.

### Files structure

```
├── public
│   └── index.html (template)
├── src
│   ├── @types
│   ├── assets
│   └── index.ts (entry point)
├── .eslintrc.js
├── .prettierrc
├── package.json
├── README.md
├── tsconfig.json
├── webpack.config.js
├── webpack.dev.js
└── webpack.prod.js
```
