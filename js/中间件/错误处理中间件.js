var express=require('express');
var http=require('http')
var app=express();

//错误处理中间件有 4 个参数，定义错误处理中间件时必须使用这 4 个参数。
//即使不需要 next 对象，也必须在签名中声明它，否则中间件会被识别为一个常规中间件，
//不能处理错误。
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.use(express.static('./'))
app.listen(3000)
