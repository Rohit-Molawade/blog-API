const PostController = require('../controllers/posts.js');
const CommentController = require('../controllers/comments.js');
const authentication_middleware = require('../middleware/authentication.js');
const validator_middleware = require('../middleware/validator.js');

var express = require('express');
var router = express.Router();

/* GET posts. */
router.get('/', PostController.post_get);

/* POST posts. */
router.post('/', function (req, res) {
	//Authorized only
	//create new post
});

/* GET specific post. */
router.get('/:post_id', PostController.post_get_id);

/* PUT posts. */
router.put('/:post_id', function (req, res) {
	//Authorized only
	//update post
});

/* GET comments. */
router.get('/:post_id/comments', CommentController.comment_get);

/* POST comments. */
router.post('/:post_id/comments', validator_middleware.comment_post, CommentController.comment_post);

/* DELETE specific comment. */
router.delete('/:post_id/comments/:comment_id', authentication_middleware.authenticate_jwt, CommentController.comment_delete);

module.exports = router;
