const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		default: ''
	},
	username: {
		type: String,
		default: ''
	},
	password: {
		type: String,
		defauly: ''
	},
	isDeleted: {
		type: Boolean,
		default: false
	},
	signUpDate: {
		type: Date,
		default: Date.now()
	}
});

UserSchema.methods.generateHash = (password) => {
	return bcrypt.hashSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);