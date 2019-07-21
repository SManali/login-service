const mongoose = require('mongoose');

const UserLogin = new mongoose.Schema({
    userName: { type: String },
    password: { type: String },
    createdAt: { type: String }
});
module.exports = mongoose.model('UserLogin', UserLogin);