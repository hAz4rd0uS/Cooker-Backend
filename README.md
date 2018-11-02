# A recipe hybrid application API

A **RESTful json API** designed to work with a recipe social application based on koa-smart (https://github.com/ysocorp/koa-smart) with **Koajs 2**, **@ Decorators**, **Node v8!**, `async-await`, `babel`, and much more...

## Summary

- What's in this API ?
- Get started
- Router with decorator

## What's in this API ?

- [**koa-smart**](https://github.com/ysocorp/koa-smart) Framework based on Koajs2, this allow you to develop RESTful API with : Class, Decorator, Params checker
- [`babel`](https://babeljs.io/) to use the latest javascript version
- [`nodemon`](https://github.com/remy/nodemon) allows to automatically restart your API whenever you change a file during development.
- [`eslint`](https://github.com/eslint/eslint) with ES7 thanks to `babel-eslint`

## Directory structure

The repository root contains auxiliary files like `package.json`, `.gitignore`, etc.

- `src`: the actual app's code is stored here
  - `locales`: all files needed to Internationalize your api (I18n)
  - `routes`: API endpoints go here, all files extending the RouteBase class will be loaded automatically
  - `middleware`: custom middleware for your application, written koa-style.

## Get started

Clone this repository, remove the `.git` directory, run `git init`, and adjust details in `package.json`.

Before installing, [download and install Node.js](https://nodejs.org/en/download/). **Node.js v8.9.1** or higher will be required.

- **Install package**
  `npm install`
- **Run Dev**
  `yarn dev OR npm run dev`
- **Run Test**
  `yarn test OR npm run test`
- **Build the Prod**
  `yarn build-prod OR npm run build-prod`
- **Run Prod**
  `yarn prod OR npm run prod`

  To launch the project, open a trerminal and launch `mongod`, then open another terminal, go to the project root directory and launch `npm start`.

## Router with decorator

**All routes have to extend the `Route` class in order to be added, and have to be inside the `routes` folder**
see [`koa-smart`](https://github.com/ysocorp/koa-smart) for more informations

## License

MIT © [hAz4rd0uS](http://www.pierrickmartelliere.fr/)
