const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors())

app.get('/test-endpoint', (req, res) => {
  res.send({data: 'test response'})
})

app.get('/test-endpoint2', (req, res) => {
  res.send({data: 'test response'})
})


app.listen(port, () => {
  console.log(`Demo app is up and listening to port ${port}`);
})