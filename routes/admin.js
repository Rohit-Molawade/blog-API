var express = require('express');
var router = express.Router();

/* GET Admin. */
router.get('/', function (req, res) {
	// get admin dashboard
});

/* POST login. */
router.post('/login', function (req, res) {
	// Validate admin login
});

/* POST logout. */
router.post('/logout', function (req, res) {
	// logout admin
});

module.exports = router;
