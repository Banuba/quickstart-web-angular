# Banuba Web AR SDK and Angular integration example

This project was bootstrapped with [Angular CLI](https://www.npmjs.com/package/@angular/cli), as well as webpack is used for serving and building application, see [webpack.config.js](./webpack.config.js). Angular version: **16**.

> **_NOTE:_** Unfortunately, Angular 17 has [lack of WASM support](https://angular.io/guide/esbuild#unimplemented-options-and-behavior), for using Banuba Web AR SDK with newer version of Angular You will have to customize the builder yourself for your project.

## Requirements

- Banuba [client token](#obtaining-banuba-client-token)
- [Nodejs](https://nodejs.org/en/) installed
- Browser with support of [WebGL 2.0](https://caniuse.com/#feat=webgl2)

### Obtaining Banuba Client token

Banuba Client token is required to get Banuba SDK Web AR working.

To receive a new **trial** client token please fill in the [form on banuba.com](https://www.banuba.com/face-filters-sdk) website, or contact us via [info@banuba.com](mailto:info@banuba.com).

## Environment setup and local run

Clone the repository

```bash
git clone https://github.com/Banuba/quickstart-web-angular.git
```

Install the project dependencies

```bash
npm install
```

Insert Banuba [client token](#obtaining-banuba-client-token) at [src/app/BanubaClientToken.js](./src/app/BanubaClientToken.ts#L1)

```js
export const BANUBA_CLIENT_TOKEN = "PUT YOUR CLIENT TOKEN HERE"
```

### Local run

Run the app in the development mode via the command

```bash
npm run dev
```

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

To learn Angular, check out the [React documentation](https://angular.io/docs).

To learn Banuba SDK Web AR, check out the [Banuba Web AR SDK documentation](https://docs.banuba.com/face-ar-sdk/web/web_overview).


