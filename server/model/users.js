const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
     password : {
         type:String,
         required:true
    },
    userType:{
        type:String,
        enum : ['student','tutor','admin'],
        default: 'student'
        
    },
    userGroup:String,
    moduleList:Array
    
    
 
   
},
{timestamps:true}
)

const Users = mongoose.model('Users', schema);

module.exports = Users;