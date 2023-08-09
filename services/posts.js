const Post = require('../models/post.js');
const fs = require('fs/promises');

exports.get_posts = async function (post_id, params) {
    try {
        //Get a specific post with its ID
        if (post_id) {
            return await Post.findById(post_id).populate('author');
        } else {
            //Return all posts
            if (typeof params !== 'undefined') {
                //Return posts depending on the params query parameter
                //Published may be true OR false
                return await Post.find({})
                    .where('published')
                    .equals(params)
                    .sort({ timestamp: -1 })
                    .populate('author');
            }
            return await Post.find({})
                .sort({ timestamp: -1 })
                .populate('author');
        }
    } catch (error) {
        return error;
    }
};

exports.create_post = async function (post_info) {
    try {
        const post = new Post(post_info);
        await post.save();
        return;
    } catch (error) {
        return error;
    }
};

exports.update_post = async function (post_info) {
    try {
        //Save old link for deletion.
        const old_banner_link = await Post.findById(
            post_info._id,
            'banner_image_url'
        );

        const result = await Post.findByIdAndUpdate(post_info._id, post_info, {
            new: true,
        });

        //Check if update is successful
        if (old_banner_link.banner_image_url !== result.banner_image_url) {
            //if successful delete the old image
            await fs.unlink(old_banner_link.banner_image_url);
        }
        return;
    } catch (error) {
        return error;
    }
};

exports.publish_post = async function (post_id) {
    try {
        await Post.findByIdAndUpdate(post_id, {
            published: true,
            published_time: Date.now(),
        });
        return;
    } catch (error) {
        return error;
    }
};

exports.unpublish_post = async function (post_id) {
    try {
        await Post.findByIdAndUpdate(post_id, { published: false });
        return;
    } catch (error) {
        return error;
    }
};

exports.get_latest = async function () {
    try {
        return await Post.find({ published: true })
            .sort({ published_time: -1 })
            .limit(1)
            .populate('author');
    } catch (error) {
        return error;
    }
};
