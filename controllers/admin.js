const adminService = require('../services/admin.js')

exports.profile_get = function (req, res) {
	try {
		res.status(200).json({
			profile: req.user,
			message: 'Admin Profile fetched',
		});
	} catch (error) {
		res.status(500);
		res.send('Some Unknown error occured');
	}
};

exports.profile_public_get = async function (req, res) {
	try {
		const author = await adminService.get_public_profile();
		res.status(200).json({
			profile: author,
			message: 'Author Profile fetched',
		});
	} catch (error) {
		res.status(500);
		res.send('Some Unknown error occured');
	}
}
