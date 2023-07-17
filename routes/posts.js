var express = require('express');
const PostController = require('../controllers/posts.js')
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
router.get('/:post_id/comments', function (req, res) {
	//get all comments of post
});

/* POST comments. */
router.post('/:post_id/comments', function (req, res) {
	//create new comments
});

/* GET specific comment. */
router.delete('/:post_id/comments/:comment_id', function (req, res) {
	//Authorized only
	//delete comment with id
});

module.exports = router;
