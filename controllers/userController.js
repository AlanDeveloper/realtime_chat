const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const registerLoad = async(req, res) => {
    try {
        res.render('register');
    } catch (error) {
        console.log(error.message);
    }
}

const register = async(req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            image: 'images/' + req.file.filename,
        });

        await user.save();

        res.render('register', { message: 'Your registration has been completed!'});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    registerLoad,
    register
}