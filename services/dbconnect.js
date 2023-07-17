const mongoose = require('mongoose');
require('dotenv').config();

//Mongoose Connection
mongoose.set('strictQuery', false); // Prepare for Mongoose 7

exports.main = async function () {
	await mongoose.connect(process.env.Mongo_URL);
};
