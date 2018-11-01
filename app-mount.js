const Koa = require('koa');
const Router = require('koa-router');
const maty = require('maty');

const app = new Koa();
const router = new Router();

// new serve by maty.js
const servePath = '/maty';
const serve = maty();
serve.mount(servePath, app); // ctx.path startsWith /maty
// block original
app.use(async (ctx, next) => {
  if (ctx.path.startsWith(servePath)) {
    return;
  }

  await next();
});

// original app serve
router.get('/home', (ctx, next) => {
  ctx.body = 'original home page';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);
