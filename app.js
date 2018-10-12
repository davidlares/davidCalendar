const express = require('express')
const app = express();
const port = 3000;

app.set('view engine','pug');

app.get('/', (req,res) => {
  res.render('index');
});

app.post('/login', (req,res) => {
  // authenticating with google
});

app.listen(3000, () => {
  console.log(`Listening on ${port}`);
});
