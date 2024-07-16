# Curriculum Vitae

Front-end application for personnel and CV management. Sample code for React interns.

## Setup

- install packages

```sh
npm ci
```

- create `.env` file in the root of the repository with the following variables

```sh
GRAPHQL_API_URL="https://cv-project-js.inno.ws/api/graphql"
SENTRY_DNS_URL=""
```

- serve the app

```sh
npm start
```

## Recommendations

The following IDE extensions are recommended for use.\

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) is a great help to avoid typos when naming variables and functions.

- To analyze the code and find problems according to the given rules, described in .eslintrc.js file a [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is used.

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is used to ensure that the overall style of the code is followed throughout the project.
