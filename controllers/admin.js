const adminService = require('../services/admin.js');

exports.profile_get = function (req, res) {
	res.status(200).json({
		profile: req.user,
	});
};
