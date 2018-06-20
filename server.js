const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoUrl = 'mongodb://maison_m:nhat5bxrr@ds111430.mlab.com:11430/database_example';
const app = express();
const port = process.env.PORT || 5000;
const apiRoutes = require('./routes/api_routes/index.js');
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);


// app.get('/', (req, res) => {
//   res.send({ express: 'BACKEND SERVER RUNNING ON PORT 5000' });
// });

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client/public', 'index.html'));
})

// MongoClient.connect(mongoUrl, (err, client) => {
// 	if(err) { console.log(err) };


// 	app.post('/signup', (req, res) => {
// 		let email = req.body.email;
// 		let username = req.body.username;
// 		let password = req.body.password;

// 		const db = client.db('database_example');

// 		db.collection('users').insertOne({
// 			email: email,
// 			username: username,
// 			password: password

// 		}, (err, result) => {
// 			if(err) { console.log(err) };
// 			console.log(result, 'saved to db');
// 			res.redirect('/');

// 		})
// 	})
// })

app.listen(port, () => console.log(`Listening on port ${port}`));




