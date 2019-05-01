const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    text: String,
    link: String,
    image:String
});

module.exports = mongoose.model('UserData', userSchema);
