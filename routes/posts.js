var express = require('express');
var router = express.Router();

/* GET posts. */
router.get('/', function (req, res) {
	//get all posts
});

/* POST posts. */
router.post('/', function (req, res) {
	//Authorized only
	//create new post
});

/* GET specific post. */
router.get('/:post_id', function (req, res) {
	//get post with id
});

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
