'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
var router = express.Router();

var obj = {
 x : 5,
 y: 7
};

var resStr = JSON.stringify(obj);

router.get('/', (req, res) => {
  res.send('Main page');
});

router.get('/test', (req, res) => {
  console.log('/test called');
  res.send(resStr);
});

router.get('/about', (req, res) => {
    res.send('Simple API examples using ExpressJS');
})

// mount the router on the app
app.use('/', router);


var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
