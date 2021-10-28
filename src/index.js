
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


// Custom Middleware 

app.use(async (req, res, next) => {
	req.context = {
		models,
		me: await models.User.findByLogin('rwieruch'),
	};
	next();
});


// * Routes * //
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

// * a route not found in our API * //
app.get('/some-new-route', function (req, res, next) {
	res.status(301).redirect('/not-found');
});

// * Generalize the redirect for all routes that are not matched by our API
app.get('*', function (req, res, next) {
	res.status(301).redirect('/not-found');
});

// * Unifier error handling instead of try/catch on every route * //
// IMPORTANT to list error handling after REST API routes
// error in API endpoints can be delegated to here error handling MIDDLEWARE
app.use((error, req, res, next) => {
	return res.status(500).json({ error: error.toString() });
});


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
/*
connectDb().then(async() => {
	app.listen(port, function (err) {
  		if (err) {
    			return console.error(err)
  		}

  		console.log(`Started at http://localhost:${port}`)
	})
});
*/

const eraseDbOnSync = true;
connectDb().then(async () => {
	if (eraseDbOnSync) {
		await Promise.all([
			models.User.deleteMany({}),
			models.Message.deleteMany({}),
			]);
			createUsersWithMessages();
	}
	app.listen(port, () => 
		console.log(`Listening on port ${port}!`),
	);
});  // To reinitialize Db after rebooting express server

// * Database Seeding * //

const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'rwieruch',
  });

  const user2 = new models.User({
    username: 'ddavids',
  });

  const message1 = new models.Message({
    text: 'Published the Road to learn React',
    user: user1.id,
  });

  const message2 = new models.Message({
    text: 'Happy to release ...',
    user: user2.id,
  });

  const message3 = new models.Message({
    text: 'Published a complete ...',
    user: user2.id,
  });

  await message1.save();
  await message2.save();
  await message3.save();

  await user1.save();
  await user2.save();
};
