const mongoose = require('mongoose');

const rivewSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required:true,
       
    },
    ratings:{
        type:Number,
        required: true
    },
    message:{
        type:String,
        required:true,
       
    }
});

module.exports = mongoose.model('rivews', rivewSchema);