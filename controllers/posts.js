const postService = require('../services/posts.js');

//GET posts controller
exports.post_get = async function (req, res) {
	try {
		const posts = await postService.get_posts();
		res.json({
			posts,
		});
	} catch (error) {
		res.status(500);
		res.send('Some Unknown error occured');
	}
};

//GET specific post controller
exports.post_get_id = async function (req, res) {
	try {
		const post_id = req.params.post_id;
		const post = await postService.get_posts(post_id);
		res.status(200).json({
			post,
		});
	} catch (error) {
		res.status(500);
		res.send('Some Unknown error occured');
	}
};

exports.post_create = async function (req, res, next) {
	try {
		if (!req.file) {
			res.status(500).json({
				message: 'Error occured',
			});
			return;
		}
		const post_info = {
			title: req.body.title,
			content: req.body.content,
			timestamp: Date.now(),
			published: false,
			author: 'req.user._id',
			banner_image_url: req.file.path,
		};
		await postService.post_create(post_info);
		res.status(200).json({
			message: 'Post created',
		});
	} catch (error) {
		res.status(500);
		res.send('Some Unknown error occured');
	}
};
