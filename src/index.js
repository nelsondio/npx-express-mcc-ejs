
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import routes from './routes';
const port = process.env.PORT || 8888
import models, { connectDb } from './models';

// Create the express app
const app = express()


// Routes and middleware
// app.use(/* ... */)
//
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true  }));
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);
// app.get(/* ... */)


app.get('/', (req, res) => {
   res.send('Received a GET GET GET GETGET HTTP method');
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



app.put('/users/:userId', (req, res) => {
   return res.send(`Received a PUT HTTP method on user/${req.params.userId} resource`);
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
connectDb().then(async() => {
	app.listen(port, function (err) {
  		if (err) {
    			return console.error(err)
  		}

  		console.log(`Started at http://localhost:${port}`)
	})
});

const createUserWithMessages = async () => {
	console.log(`create user1 and message1`);
	const user1 = new models.User({
		username: 'rwieruch',
	});
	const message1 = new models.Message({
		text: 'Published the Road to Learn React',
		user: user1.id,
	});
	await message1.save();
	await user1.save();
};


/*
const eraseDbOnSync = true;
connectDb().then(async () => {
	if (eraseDbOnSync) {
		await Promise.all([
			models.User.deleteMany({}),
			models.Message.deleteMany({}),
			]);
	}
	app.listen(port, () => {
		console.log(`Listening on port ${port}!`);
	});
});  // To reinitialize Db after rebooting express server
*/
