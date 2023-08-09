const Comment = require('../models/comment.js');

exports.get_comments = async function (postId) {
    try {
        //Return all comments
        return await Comment.find({ post: postId })
            .sort({ timestamp: -1 })
            .populate('post');
    } catch (error) {
        return error;
    }
};

exports.post_comments = async function (comment_info) {
    try {
        const comment = new Comment(comment_info);
        await comment.save();
        return;
    } catch (error) {
        return error;
    }
};

exports.delete_comment = async function (comment_id) {
    try {
        await Comment.findByIdAndDelete(comment_id);
        return;
    } catch (error) {
        return error;
    }
};
