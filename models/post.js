const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postschema = new Schema({
	author: { type: Schema.Types.ObjectId, required: true, refs: 'User' },
	timestamp: { type: Date, required: true },
	title: { type: String, required: true, maxLength: 48 },
	content: { type: String, required: true },
	banner_image_url: { type: String, required: true },
	published: { type: Boolean, required: true },
	published_time: { type: Date, required: true },
});

module.exports = mongoose.model('Post', postschema);
