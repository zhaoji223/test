const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  ctx.body = 'Hello World';
});

console.log(module.parent)
if (!module.parent) app.listen(3000);