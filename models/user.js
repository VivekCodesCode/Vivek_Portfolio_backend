const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required:true,
        unique: true
    },
    company:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required:true,
        unique: true
    }
});

module.exports = mongoose.model('User', userSchema);