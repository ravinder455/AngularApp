const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const HttpClient = require('node-rest-client').Client;


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/********************************************
 *        configuring header
 ********************************************/

app.use(function (req, res, next) {
  var origin = req.headers.origin;
  if (origin && origin.includes('localhost')) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Length, ' +
      'Content-Type, Content-Disposition, Accept, Authorization, Pragma, Cache-Control, Expires');
  }

  next();
});

/***************************
 *      api
 ***************************/
app.get('/api/version', function (req, res) {
  res.send('dev');
  res.status(200);
});

app.post('/api/login', function (req, res) {
  //var httpClient = new HttpClient();
  let resp = {};
  let data = {
    userName : req.body.userName,
    password : req.body.password
  };

  if(data.userName == 'admin' && data.password == 'admin') {
    resp.data = 'success';
    res.status(200);
  } else {
    resp.error = 'Invalid Credentials';
    res.status(400);
  }

  return  res.send(resp);

  // httpClient.post('', args, function (data, response) {
  //   res.status(response.statusCode);
  //   return res.send(data);
  // }).on('error', function(e){
  //   console.log('Error ======> ', e);
  // }).end();

});

/********************************************
 *        node server config
 ********************************************/

app.all('*', function(req, res) {
  console.log(req);
  res.redirect('/');
});

var port = process.env.PORT || 3000;

var webServer = app.listen(port, function () {
  console.log('Listening on port %d', webServer.address().port);
});
