const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const mongoUrl = 'mongodb://maison_m:nhat5bxrr@ds111430.mlab.com:11430/database_example';
const mongoose = require('mongoose');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);

// mongoose.connect(mongoUrl);
// const connection = mongoose.connection;
// connection.on('connected', () => {
// 	console.log('connected')
// });

mongoose.connect(mongoUrl, (err, client) => {
	if(err) { console.log(err) };
})

app.get('/', (req, res) => {
  res.send({ express: 'BACKEND SERVER RUNNING ON PORT 5000' });
});




app.listen(port, () => console.log(`Listening on port ${port}`));




