const User = require('../../models/User');
const UserSession = require('../../models/UserSession');


module.exports = (app) => {


	app.post('/account/signin', (req, res, next) => {
		const { body } = req;
		const { password } = body;
		const { username } = body;

	    if (!password) {
	      return res.send({
	        success: false,
	        message: 'Error: Password cannot be blank.'
	      });
	    }
	    if (!username) {
	      return res.send({
	        success: false,
	        message: 'Error: Username cannot be blank.'
	      });
	    }

	    User.find({
	    	username: username
	    }, (err, users) => {
	    	if (err) {
	        console.log('err 2:', err);
		        return res.send({
		          success: false,
		          message: 'Error: server error'
	            });
            }
            if (users.length != 1) {
	             return res.send({
	               success: false,
	               message: 'Error: Invalid'
	             });
            }

            const user = users[0];
            if (user.password != password) {
		        return res.send({
		          success: false,
		          message: 'Error: Invalid'
        		});
            }

            const userSession = new UserSession();
	        userSession.userId = user._id;
	        userSession.save((err, doc) => {
            if (err) {
              console.log(err);
              return res.send({
                success: false,
                message: 'Error: server error'
              });
            }
	        console.log(doc._id);
	        res.redirect('/userdashboard');
	      });
	   });
	});
}