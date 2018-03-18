var express=require('express');
var http=require('http')
var app=express();
app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id);
  next();
}, function (req, res, next) {
  res.send('User Info');
});


app.use(express.static('./'))
app.listen(3000)
