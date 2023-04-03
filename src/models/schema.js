const mongoose = require('mongoose');
const {Schema} = mongoose;

const Employee = new Schema({
    idUser: String,
    userName: String,
    date : String,
    punchIn : String,
    punchOut : String

});
module.exports = mongoose.model('Employee',Employee);

