const { body, validationResult } = require('express-validator');

exports.admin_login = [
	body('email').trim().notEmpty().withMessage('Email not provided').isEmail().withMessage('Not an email').escape(),
	body('password').trim().notEmpty().withMessage('Password not provided').isStrongPassword().withMessage('Password must be strong').escape(),
	(req, res, next) => {
		const error_list = validationResult(req);
		if (!error_list.isEmpty()) {
			res.status(400).json({
				message: error_list,
			});
			return;
		}
		next();
	},
];

exports.comment_post = [
	body('name')
		.trim()
		.notEmpty()
		.withMessage('Name not provided')
		.isString()
		.withMessage('Name should contain only alphabets')
		.isLength({ max: 16 })
		.withMessage('Max length 16')
		.escape(),

	body('content').trim().notEmpty().withMessage('Content not provided').isAlphanumeric().escape(),
	(req, res, next) => {
		const error_list = validationResult(req);
		if (!error_list.isEmpty()) {
			res.status(400).json({
				message: error_list,
			});
			return;
		}
		next();
	},
];

exports.create_post = [
	body('title').trim().notEmpty().withMessage('Title not provided').isString().isLength({ max: 48 }).withMessage('Max length 48').escape(),
	body('content').trim().notEmpty().withMessage('Content not provided').isString().escape(),
	(req, res, next) => {
		const error_list = validationResult(req);
		if (!error_list.isEmpty()) {
			console.log('err');
			res.status(400).json({
				message: error_list,
			});
			return;
		}
		next();
	},
];
