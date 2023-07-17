const Post = require('../models/post.js');

exports.getposts = async function (post_id) {
	try {
		if (post_id) {
			return await Post.findById(post_id).populate('author');
		} else {
			//Return all posts
			return await Post.find({}).sort({ timestamp: -1 }).populate('author');
		}
	} catch (error) {
		return error;
	}
};
