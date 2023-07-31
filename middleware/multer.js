const multer = require('multer');
const maxsize = 1 * 1000 * 1000;

const multerStorage = multer.diskStorage({
	destination: function (req, file, done) {
		done(null, 'public/images/banners');
	},
	filename: function (req, file, done) {
		const ext = file.mimetype.split('/')[1];
		done(null, `${file.originalname}-${Date.now()}.${ext}`);
	},
});

const multerFilter = (req, file, done) => {
	const ext = file.mimetype.split('/')[1];
	if (ext === 'png' || ext === 'jpg' || ext === 'jpeg') {
		done(null, true);
		return;
	}
	done(null, false);
};

module.exports = multer({
	storage: multerStorage,
	fileFilter: multerFilter,
	limits: { fileSize: maxsize },
});
