const postService = require('../services/posts.js');

//GET posts controller
exports.post_get = async function (req, res) {
    try {
        const params = req.query.publish;
        const posts = await postService.get_posts(undefined, params);
        res.status(200).json({
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

//POST Create Post controller
exports.post_create = async function (req, res, next) {
    try {
        if (!req.file) {
            res.status(400).json({
                message: 'Uploaded Image is not supported',
            });
            return;
        }
        const post_info = {
            title: req.body.title,
            content: req.body.content,
            timestamp: Date.now(),
            published: false,
            published_time: Date.now(),
            author: req.user._id,
            banner_image_url: req.file.path,
        };

        await postService.create_post(post_info);
        res.status(200).json({
            message: 'Post created',
        });
    } catch (error) {
        res.status(500);
        res.send('Some Unknown error occured');
    }
};

//PUT update post controller
exports.post_update = async function (req, res, next) {
    try {
        if (!req.file) {
            res.status(400).json({
                message: 'Uploaded File not Found',
            });
            return;
        }
        const post_info = {
            _id: req.params.post_id,
            title: req.body.title,
            content: req.body.content,
            timestamp: Date.now(),
            banner_image_url: req.file.path,
        };

        await postService.update_post(post_info);
        res.status(200).json({
            message: 'Post updated',
        });
    } catch (error) {
        res.status(500);
        res.send('Some Unknown error occured');
    }
};

//PUT update publish status controller
exports.post_update_publish = async (req, res, next) => {
    try {
        const post_id = req.params.post_id;
        await postService.publish_post(post_id);
        res.status(200).json({
            message: 'Post published',
        });
    } catch (err) {
        res.status(500);
        res.send('Some Unknown error occured');
    }
};

//PUT publish status controller
exports.post_update_unpublish = async (req, res, next) => {
    try {
        const post_id = req.params.post_id;
        await postService.unpublish_post(post_id);
        res.status(200).json({
            message: 'Post unpublished',
        });
    } catch (err) {
        res.status(500);
        res.send('Some Unknown error occured');
    }
};

//GET latest post controller
exports.post_get_latest = async (req, res, next) => {
    try {
        const post = await postService.get_latest();
        res.status(200).send({
            post,
        });
    } catch (error) {
        res.status(500);
        res.send('Some Unknown error occured');
    }
};
