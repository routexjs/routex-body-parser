# Routex Body Parser [![npm](https://img.shields.io/npm/v/@routex/body-parser.svg)](https://www.npmjs.com/package/@routex/body-parser) [![Travis CI](https://img.shields.io/travis/com/Cretezy/routex-body-parser.svg)](https://travis-ci.com/Cretezy/routex-body-parser) [![Codecov](https://img.shields.io/codecov/c/github/Cretezy/routex-body-parser.svg)](https://codecov.io/gh/Cretezy/routex-body-parser) [![Greenkeeper badge](https://badges.greenkeeper.io/Cretezy/routex-body-parser.svg)](https://greenkeeper.io/)

Body parsing for [Routex](https://www.npmjs.com/package/routex).

[Documentation](https://routex.netlify.com/docs/packages/body-parser) - [GitHub](https://github.com/Cretezy/routex-body-parser)

## Example

Install:

```bash
yarn add @routex/body-parser
# or
npm add @routex/body-parser
```

Setup your app:

```js
const { Routex, JsonBody } = require("routex");
const bodyParser = require("@routex/body-parser");

const port = process.env.PORT || 3000;
const app = new Routex();

app.use(bodyParser.json());

app.get("/", ctx => {
  ctx.body = new JsonBody(ctx.req.body);
});

app.listen(port).then(() => console.log(`Listening on ${port}`));
```

The parsed body is available under `ctx.req.body`.

## Support

We support all currently active and maintained [Node LTS versions](https://github.com/nodejs/Release), include current Node versions.

Please file feature requests and bugs at the [issue tracker](https://github.com/Cretezy/routex-body-parser/issues).
