const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required:true,
       
    },
    company:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required:true,
       
    }
});

module.exports = mongoose.model('User', userSchema);