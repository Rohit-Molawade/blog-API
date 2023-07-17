const postService = require('../services/posts.js');

exports.post_get = async function (req, res) {
	try {
		const posts = await postService.getposts();
		res.json({
			posts,
		});
	} catch (error) {
		res.status(500);
		res.send('Some Unknown error occured');
	}
};

exports.post_get_id = async function (req, res) {
	try {
		const post_id = req.params.post_id;
		const post = await postService.getposts(post_id);
		res.json({
			post,
		});
	} catch (error) {
		res.status(500);
		res.send('Some Unknown error occured');
	}
};
