const mongoose = require('mongoose');
const {Schema} = mongoose;

const User = new Schema({
    userName: String,
    password : String

});
module.exports = mongoose.model('User',User);

