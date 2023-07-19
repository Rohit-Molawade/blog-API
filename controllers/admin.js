exports.profile_get = function (req, res) {
	res.status(200).json({
		profile: req.user,
		message: 'Admin Profile fetched',
	});
};
