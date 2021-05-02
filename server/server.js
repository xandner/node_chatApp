const path = require('path');
const express = require('express');
const exp = require('constants');

const publicPath=path.join(__dirname,"/../public")
const port=process.env.PORT || 2000

var app=express()

app.use(express.static(publicPath))

app.listen(2000,()=>{
    console.log("server is running on port 2000");
})