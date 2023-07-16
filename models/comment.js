const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentschema = new Schema({
	name: { type: String, required: true },
	post: { type: Schema.Types.ObjectId, required: true },
	content: { type: String, required: true },
	timestamp: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model('Comment', commentschema);
