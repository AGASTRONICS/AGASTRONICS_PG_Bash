const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : String,
    bio : String,
    election : String,
    wallet: {
        type: String,
        unique: true,
        required: true
    },
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;