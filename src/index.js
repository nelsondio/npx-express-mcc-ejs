'use strict'
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 8888
// Create the express app
const app = express()

require('dotenv').config()

// Routes and middleware
// app.use(/* ... */)
//
app.use(cors())
// app.get(/* ... */)

app.get('/', (req, res) => {
   res.send('Received a GET HTTP method');
})
app.post('/', (req, res) => {
   return res.send('Received a POST HTTP method');
})
app.put('/', (req, res) => {
   return res.send('Received a PUT HTTP method');
})
app.delete('/', (req, res) => {
   return res.send('Received a DELETE HTTP method');
})

app.get('/users', (req, res) => {
   res.send('Received a GET HTTP method on user resource');
})
app.post('/users', (req, res) => {
   return res.send('Received a POST HTTP method on user resource');
})
app.put('/users/:userId', (req, res) => {
   return res.send(`Received a PUT HTTP method on user/${req.params.userId} resource`);
})
app.delete('/users/:userId', (req, res) => {
   return res.send(`Received a DELETE HTTP method on user/${req.params.userId}`);
})
// Error handlers
app.use(function fourOhFourHandler (req, res) {
  res.status(404).send()
})
app.use(function fiveHundredHandler (err, req, res, next) {
  console.error(err)
  res.status(500).send()
})

// Start server
app.listen(port, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log(`Started at http://localhost:${port}`)
})
