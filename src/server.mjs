import Koa from 'koa';
import yargs from 'yargs-parser'
const app = new Koa();
const args =  yargs(process.argv);

app.use(async ctx => {
  console.log(ctx.request.url, args.env)
  // 排除资源路径，剩下的就是路由
  if(!/.*\..*/.test(ctx.request.url)) {
    ctx.response.type = 'html';
    ctx.response.body = `<h2>Hello docker</h2><br><p>${args.env}</p>`;
  }
});

app.listen(3000);
