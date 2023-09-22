import Koa from 'koa';
import mysql from 'mysql'

const app = new Koa();
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'test'
});
connection.connect();

app.use(async (ctx, next) => {
  console.log('app.use');
  // ctx.body ='<div>123</div>'
  /* await new Promise(resolve => {
    setTimeout(() => {
      resolve(123)
    }, 1000)
  })
  ctx.response.type = 'json';
  ctx.response.body = {
    success: true,
    rows: []
  };
  next() */
  await new Promise(resolve => {
    connection.query('SELECT * FROM Student' , (err, rows) => {
      if(err){
        console.log('app.use----', err);
        ctx.response.type = 'json';
        ctx.response.body = {
          success: false,
          rows: []
        };
        resolve();
        next();
        
      }
      else{
        ctx.response.type = 'json';
        ctx.response.body = {
          success: true,
          rows
        };
        resolve();
        next();
      }
    });
  })
})
app.listen(3002, () => console.log('listining on port 3001'));

