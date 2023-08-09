const mongoose = require('mongoose');
const intlFormat = require('date-fns/intlFormat');
const { decode } = require('html-entities');

const Schema = mongoose.Schema;

const postschema = new Schema(
    {
        author: { type: Schema.Types.ObjectId, required: true, refs: 'User' },
        timestamp: { type: Date, required: true },
        title: { type: String, required: true, maxLength: 48 },
        content: { type: String, required: true },
        banner_image_url: { type: String, required: true },
        published: { type: Boolean, required: true },
        published_time: { type: Date, required: true },
    },
    {
        toObject: { virtuals: true, getters: true },
        toJSON: { virtuals: true, getters: true },
    }
);

postschema.virtual('v_banner_image_url').get(function () {
    return `http://localhost:3001/${this.banner_image_url}`;
});

postschema.virtual('date').get(function () {
    return intlFormat(this.timestamp, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
});

postschema.virtual('time').get(function () {
    return intlFormat(this.timestamp, { hour: 'numeric', minute: 'numeric' });
});

postschema.virtual('v_content').get(function () {
    return decode(this.content);
});

module.exports = mongoose.model('Post', postschema);
