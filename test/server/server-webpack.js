const Koa = require('koa');
const send = require('koa-send')
// const koaWebpack = require('koa-webpack')
const proxy = require('koa-proxies')
const https = require('https');
const app = new Koa();
var fs = require('fs');

var privateKey  = fs.readFileSync('cert.pem');
var certificate = fs.readFileSync('cert.pem');

var credentials = {key: privateKey, cert: certificate};


app.use(async (ctx, next) => {
    console.log(ctx.path)
    if(ctx.url == '/') {
        await send(ctx, ctx.path, {root: __dirname + '/dist/index.html'})
    } else if(ctx.url.split('?')[0].includes('.')) {
        await send(ctx, ctx.path, {root: __dirname + '/dist'})
    } else {
        await next()
    }
});
app.use(proxy('', {
    target: 'https://gateway.qschou.com/v3.0.0/',
    changeOrigin: true,
    // agent: new httpsProxyAgent('https://gateway.qschou.com'),
    rewrite: path => path.replace(/^\/octocat(\/|\/\w+)?$/, '/vagusx'),
    logs: true
}))

https.createServer(credentials, app.callback()).listen(443);
console.log('listen 443')
