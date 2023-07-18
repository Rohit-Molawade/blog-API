const adminController = require('../controllers/admin.js');
const validator_middleware = require('../middleware/validator.js');
const authentication_middleware = require('../middleware/authentication.js');

var express = require('express');
var router = express.Router();

/* GET Admin. */
router.get('/profile', authentication_middleware.authenticate_jwt, adminController.get_profile);

/* POST login. */
router.post('/login', validator_middleware.admin_login, authentication_middleware.authenticate_local);

/* POST logout. */
router.post('/logout', function (req, res) {
	// logout admin
});

module.exports = router;
