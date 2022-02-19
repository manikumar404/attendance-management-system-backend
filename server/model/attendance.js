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
    students:[
        {
            id:String,
            name:String,
            attendance:[
                {
                    status:String,
                    time:{
                        type:Date,
                        default:Date.now
                    }
                }
            ]
            
        }
    ]
},
{timestamps:true}
)

const Attendance = mongoose.model('Attendance', schema);

module.exports = Attendance;