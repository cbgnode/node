var express =require('express');
var app=express();
app.use(express.static("./"));
app.listen("3300","172.20.10.6");


