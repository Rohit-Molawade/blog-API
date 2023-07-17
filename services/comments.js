const Comment = require('../models/comment.js');

exports.getcomments = async function () {
	try {
		//Return all posts
		return await Comment.find({}).sort({ timestamp: -1 }).populate('post');
	} catch (error) {
		return error;
	}
};
