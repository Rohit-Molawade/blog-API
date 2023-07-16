var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts.js');
const adminRouter = require('./routes/admin.js');

//Mongoose Connection
mongoose.set('strictQuery', false); // Prepare for Mongoose 7

main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect(process.env.Mongo_URL);
}

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/posts', postsRouter);
app.use('/api/admin', adminRouter);

module.exports = app;
