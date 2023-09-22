import Koa from 'koa';
import mysql from 'mysql'

const app = new Koa();

// 启动命令 export MYSQL_PASSWORD=password MYSQL_DB=test && node server.mjs
const connection = mysql.createPool({
	connectionLimit: 10,
	host: process.env.MYSQL_HOST || 'localhost',
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DB
});

app.use(async (ctx, next) => {
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
app.listen(3001, () => console.log('listining on port 3001'));

