const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userschema = new Schema({
	username: { type: String, required: true, maxLength: 16 },
	email: { type: String, required: true },
	password: { type: String, required: true },
	profile_picture_url: { type: String, required: true },
	about: {type: String, required: true, maxLength: 48},
});

module.exports = mongoose.model('User', userschema);
