const express = require('express')
const app = express();
const port = 3000;

app.get('/', () => {
  res.end(`Hello, world`);
});

app.listen(3000, () => {
  console.log(`Listening on ${port}`);
});
