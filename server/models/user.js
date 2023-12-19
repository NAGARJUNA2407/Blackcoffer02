// schema for the mongodb

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxLength: 20,
	},
});


module.exports = mongoose.model('user', userSchema);