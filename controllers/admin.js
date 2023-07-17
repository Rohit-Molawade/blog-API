const adminService = require('../services/admin.js');

const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login_user = function (req, res, next) {
	//Use local password strategy defined @services/passport.js
	passport.authenticate('local', { session: false }, (error, user) => {
		if (error || !user) {
			res.status(400).json({
				message: 'Something went wrong',
			});
		}

		//If credentials are correct Login and sign JWT
		req.login(user, { session: false }, (err) => {
			if (err) {
				res.status(400).json({
					message: 'Some error Occured',
				});
			}

			const token = jwt.sign({ _id: user._id, email: user.email }, process.env.jwt_secret, { expiresIn: 3600 });
			res.status(200).json(token);
		});
	})(req, res, next);
};

exports.get_profile = function (req, res) {
	res.status(200).json({
		message: req.user,
	});
};
