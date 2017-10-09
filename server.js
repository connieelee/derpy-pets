const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(1337, () => {
  console.log('melting hearts of animal lovers on 1337');
});
