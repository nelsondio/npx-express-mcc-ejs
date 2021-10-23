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
   res.send(process.env.SECRET_KEY);
})
app.get('/', (req, res) => {
	res.send('Hello World!')
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
