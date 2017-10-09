const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './browser/index.html'));
});

app.listen(1337, () => {
  console.log('raining cats and dogs on 1337');
});
