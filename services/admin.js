const Admin = require('../models/user.js');

exports.get_public_profile = async function () {
    try {
        return await Admin.find({}, 'username email about profile_picture_url').limit(1);
    } catch (error) {
        return error
    }
}