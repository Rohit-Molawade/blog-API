const commentService = require('../services/comments.js');

//GET Comments controller
exports.comment_get = async function (req, res) {
	try {
		const comments = await commentService.get_comments();
		res.status(200).json({
			comments,
		});
	} catch (error) {
		res.status(500);
		res.send('Some Unknown error occured');
	}
};

exports.comment_post = async function (req, res, next) {
	try {
		const comment_info = {
			name: req.body.name,
			content: req.body.content,
			post: req.params.post_id,
			timestamp: Date.now(),
		};

		await commentService.post_comments(comment_info);

		res.status(200).json({
			message: 'Comment created',
		});
	} catch (error) {
		res.status(500);
		res.send('Some Unknown error occured');
	}
};

exports.comment_delete = async function (req, res, next) {
	try {
		const comment_id = req.params.comment_id;
		await commentService.delete_comment(comment_id);

		res.status(200).json({
			message: 'Comment succesfully deleted',
		});
	} catch (error) {
		res.status(500);
		res.send('Some Unknown error occured');
	}
};
