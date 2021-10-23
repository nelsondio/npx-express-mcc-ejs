import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { v4 as uuidv4 } from 'uuid';

const port = process.env.PORT || 8888
// Create the express app
const app = express()


// Routes and middleware
// app.use(/* ... */)
//
app.use(cors())
// app.get(/* ... */)

let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};
 
let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

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
//   res.send('Received a GET HTTP method on user resource');
     return res.send(Object.values(users));
})

app.get('/users/:userId', (req, res) => {
     return res.send(users[req.params.userId]);
})

app.get('/messages', (req, res) => {
     return res.send(Object.values(messages));
})
app.get('/messages/:messageId', (req, res) => {
     return res.send(users[req.params.messageId]);
})
app.post('/users', (req, res) => {
   return res.send('Received a POST HTTP method on user resource');
})
app.post('/messages', (req, res) => {
	const id = uuidv4();
	const message = {
		id,
		text: req.body.text,
	};
	message[id] = message; //pseudodatabase
	return res.send(message);
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
