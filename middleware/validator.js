const { body, validationResult } = require('express-validator');

exports.admin_login = [
	body('email').trim().notEmpty().withMessage('Email not provided').isEmail().withMessage('Not an email').escape(),
	body('password').trim().notEmpty().withMessage('Password not provided').isStrongPassword().withMessage('Password must be strong').escape(),
	(req, res, next) => {
		const error_list = validationResult(req);
		if (!error_list.isEmpty()) {
			res.status(500).json({
				message: error_list,
			});
			return;
		}
		next();
	},
];
