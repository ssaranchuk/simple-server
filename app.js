const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next()
})

app.get('/test-endpoint', (req, res) => {
  res.send({data: 'test response'})
})

app.listen(port, () => {
  console.log(`Demo app is up and listening to port ${port}`);
})