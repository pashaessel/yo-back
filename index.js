const express = require('express');
const config = require('./config')
const app = express()
const port = 3000
const headers = {
  'Access-Control-Allow-Origin': config.frontPath,
  'Vary': 'Origin'
}

app.get('/', (req, res) => {
   res.set('Access-Control-Allow-Origin' ,'*')
  res.send('test')
  console.log(test);
})

app.get('/campaigns/create', (req, res) => {
  res.set('Access-Control-Allow-Origin' , config.backPath)
  res.send('test')
  console.log(test);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})