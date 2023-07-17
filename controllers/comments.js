const commentService = require('../services/comments.js');

exports.comment_get = async function (req, res) {
	try {
		const comments = await commentService.getcomments();
		res.json({
			comments,
		});
	} catch (error) {
		res.status(500);
		res.send('Some Unknown error occured');
	}
};
