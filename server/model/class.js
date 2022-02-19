const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    className : {
        type : String,
        required: true,
        unique:true
    },
    moduleCode : {
        type: String,
        required: true,
        unique: true
    },
    tutor : {
        type:String,
        required:true
   },
    classStrength:Number,
    credit:Number,  
    students:Array
},
{timestamps:true}
)

const Class = mongoose.model('Class', schema);

module.exports = Class;