const passport = require('passport');
const adminController = require('../controllers/admin.js');

var express = require('express');
var router = express.Router();

/* GET Admin. */
router.get('/profile', passport.authenticate('jwt', { session: false }), adminController.get_profile);

/* POST login. */
router.post('/login', adminController.login_user);

/* POST logout. */
router.post('/logout', function (req, res) {
	// logout admin
});

module.exports = router;
