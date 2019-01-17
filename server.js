'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

var obj = {
 x : 5,
 y: 7
};

var resStr = JSON.stringify(obj);

app.get('/test', (req, res) => {
  console.log('/test called');
  res.send(resStr);
});

app.get('/', (req, res) => {
    console.log('/ called');
    res.send('Hello Node.js Sample!\n');
});


var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
