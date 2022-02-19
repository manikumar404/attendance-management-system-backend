const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{

        const conn = await mongoose.connect(process.env.MONGO_URI,{
            UseNewUrlParser:true,
            UseUnifiedTopology:true,
           // UseFindAndModify:false,
           // UseCreateIndex:true

        })
        console.log(`db connected: ${conn.toString()}`)

    }catch(err){
        console.log('error in db connection ',err)
        process.exit()

    }
    
}

module.exports = connectDB