const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    profileID: String,
    name: String,
    profilePic: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;