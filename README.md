_Looking for demo ? Go here --> [http://edgar-accordion.surge.sh](http://edgar-accordion.surge.sh)_

---

# edgar-accordion

This project was build project using [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components). You can see full source code at https://github.com/danywalls/edgar-accordion.

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies.

```bash
cd edgar-accordion
npm install
```

I'm using [Parcel](https://parceljs.org) as bundler, it allows hotreload and an easy way to compile es6 and sass files:

The support for _async_ and _await_ is required .babelrc "@babel/plugin-transform-runtime".

```bash
npm run dev
```

Navigate to [localhost:1234](http://localhost:1234) and you should see the app running.

## Building and running in production mode

To create an dist version:

```bash
npm run prod
```

The dist directory will contain all files related with the app, ready to be deployed.

Thanks!
