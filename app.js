var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('./services/dbconnect.js');

var indexRouter = require('./routes/index.js');
const postsRouter = require('./routes/posts.js');
const adminRouter = require('./routes/admin.js');

//AUTHENTICATON MIDDLEWARE
require('./services/passport.js');

//Connect to mongo
mongoose.main();

var app = express();

//CORS support to allow frontend.
app.use(
	cors({
		origin: 'http://localhost:3001',
		methods: ['POST', 'GET', 'PUT', 'DELETE'],
	})
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//API ROUTES
app.use('/api', indexRouter);
app.use('/api/posts', postsRouter);
app.use('/api/admin', adminRouter);

module.exports = app;
