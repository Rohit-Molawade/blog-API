const mongoose = require('mongoose');
const intlFormat = require('date-fns/intlFormat');

const Schema = mongoose.Schema;

const commentschema = new Schema({
	name: { type: String, required: true },
	post: { type: Schema.Types.ObjectId, required: true, refs: 'Post'},
	content: { type: String, required: true },
	timestamp: { type: Date, required: true, default: Date.now() },
},
{
	toObject: { virtuals: true, getters: true },
	toJSON: { virtuals: true, getters: true },
}
);

commentschema.virtual('date').get(function () {
	return intlFormat(this.timestamp, { year: 'numeric', month: 'long', day: 'numeric' });
});

commentschema.virtual('time').get(function () {
	return intlFormat(this.timestamp, { hour: 'numeric', minute: 'numeric' });
});

module.exports = mongoose.model('Comment', commentschema);
