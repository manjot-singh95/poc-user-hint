var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.set("Access-Control-Allow-Origin", "*")
  res.set("Accept-CH", "Sec-CH-UA, Sec-CH-UA-Form-Factor, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform-Version")
  res.send({msg:'Hello World!'});
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});