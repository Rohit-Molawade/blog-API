const adminService = require('../services/admin.js');

exports.get_profile = function (req, res) {
	res.status(200).json({
		profile: req.user,
	});
};
