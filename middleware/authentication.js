const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authenticate_local = function (req, res, next) {
	passport.authenticate('local', { session: false }, (error, user) => {
		if (error || !user) {
			res.status(400).json({
				message: 'Something went wrong',
			});
			return;
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

exports.authenticate_jwt = function (req, res, next) {
	passport.authenticate('jwt', { session: false })(req, res, next);
};
