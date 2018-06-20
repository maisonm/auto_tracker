
module.exports = (app) => {

	let data = {};

	app.post('/mileage-input', (req, res) => {

		data.startingOdo = req.body.startingOdo;
		data.endingOdo = req.body.endingOdo;

		res.redirect('/userdashboard');

	})

	app.get('/mileage-data', (req, res) => {
		res.send({ data });
	})

}