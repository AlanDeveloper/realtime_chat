require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/realtime_chat');

const app = require('express')();

const http = require('http').Server(app);

http.listen(process.env.APP_PORT, function () {
    console.log(`Server is running`);
});