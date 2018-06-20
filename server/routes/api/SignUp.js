const User = require('../../models/User');

module.exports = (app) => {

	app.post('/account/signup', (req, res, next) => {
		const { body } = req;
		const { password } = body;
		const { username } = body;
		let { email } = body;

		// const email = 'moa@gmail.com';
		// const password = '1234';
		// const  username = 'mmoa1';

		if(!email){
			return res.send({
				success: false,
				message: 'Error: Email cannot be blank.'
			})
		}
		if(!password){
			return res.send({
				success: false,
				message: 'Error: Password cannot be blank.'
			})
		}
		if(!username){
			return res.send({
				success: false,
				message: 'Error: Username cannot be blank.'
			})
		}

		User.find({
			username: username
		}, (err, previousUsers) => {

			if(err) {
				return res.send({
				success: false,
				message: 'Error: Server error'
			})
			} else if (previousUsers.length > 0) {
				return res.send({
				success: false,
				message: 'Error: Account already exists.'
			})
			}

			const newUser = new User();

			// newUser.email = email;
			// newUser.password = newUser.generateHash(password);
			newUser.password = password;
			newUser.username = username;
			newUser.save((err, user) => {
				if(err){
					return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
				}

			 res.redirect('/signin');
			});

		});

	})
}