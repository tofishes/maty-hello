const Koa = require('koa');
const maty = require('maty');

const app = new Koa();

const serve = maty();
serve.mount('/maty', app);

app.use((ctx, next) => {
  if (ctx.isEnd) { // ctx.isEnd is extended by maty.js
    return;
  }

  await next();
});


