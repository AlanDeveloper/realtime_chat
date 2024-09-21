require('dotenv').config();

const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.useDb('realtime_chat');

const app = require('express')();

const http = require('http').Server(app);

const userRoute = require('./routes/userRoute');

app.use('/', userRoute);

http.listen(process.env.APP_PORT, function () {
    console.log(`Server is running`);
});