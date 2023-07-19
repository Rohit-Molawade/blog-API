const PostController = require('../controllers/posts.js');
const CommentController = require('../controllers/comments.js');
const authentication_middleware = require('../middleware/authentication.js');
const validator_middleware = require('../middleware/validator.js');

const upload = require('../middleware/multer.js');

var express = require('express');
var router = express.Router();

/* GET posts. */
router.get('/', PostController.post_get);

/* POST posts. */
router.post(
	'/',
	authentication_middleware.authenticate_jwt,
	upload.single('banner_image'),
	validator_middleware.create_post,
	PostController.post_create
);

/* GET specific post. */
router.get('/:post_id', PostController.post_get_id);

/* PUT posts. */
router.put(
	'/:post_id',
	authentication_middleware.authenticate_jwt,
	upload.single('banner_image'),
	validator_middleware.create_post,
	PostController.post_update
);

router.put('/:post_id/publish', authentication_middleware.authenticate_jwt, PostController.post_update_publish);

router.put('/:post_id/unpublish', authentication_middleware.authenticate_jwt, PostController.post_update_unpublish);

/* GET comments. */
router.get('/:post_id/comments', CommentController.comment_get);

/* POST comments. */
router.post('/:post_id/comments', validator_middleware.comment_post, CommentController.comment_post);

/* DELETE specific comment. */
router.delete('/:post_id/comments/:comment_id', authentication_middleware.authenticate_jwt, CommentController.comment_delete);

module.exports = router;
