const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const bodyparser = require("body-parser")
dotenv.config({path:'./config.env'})

const connectDB = require('./server/database/connection')

const path = require("path")
const PORT = process.env.PORT || 8080
//const URI = 'mongodb+srv://mani:mani123@cluster0.xycbo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app = express();



app.use(morgan('tiny'))
connectDB()
app.use(bodyparser.urlencoded({extended:true}))
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))


app.set('view engine', 'ejs')
//app.set('views',path.resolve(__dirname,'views/ejs'))
app.get('/',(req,res)=>{
    res.send("attendance management system 88")
})

app.listen(PORT,()=>console.log(`server running at ${PORT}`))