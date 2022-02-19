const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const bodyparser = require("body-parser")
dotenv.config({path:'./config.env'})

//const router = require('./server/routes/router.js')
const auth = require('./server/routes/auth.js')
const admin = require('./server/routes/admin.js')
const common = require('./server/routes/common.js')
const students = require('./server/routes/students.js')
const tutors = require('./server/routes/tutors.js')
const test = require('./server/routes/test.js')


const connectDB = require('./server/database/connection')

const path = require("path")
const PORT = process.env.PORT || 8080
//const URI = 'mongodb+srv://mani:mani123@cluster0.xycbo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app = express();



app.use(morgan('tiny'))
app.use(express.json())
connectDB()
app.use(bodyparser.urlencoded({extended:true}))
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))


app.set('view engine', 'ejs')
//app.set('views',path.resolve(__dirname,'views/ejs'))
// app.get('/user',(req,res)=>{
//     res.send("attendance management system 88")
// })
app.use('/auth',auth)
app.use('/admin',admin)
app.use('/common',common)
app.use('/students',students)
app.use('/tutors',tutors)
app.use('/test',test)

app.listen(PORT,()=>console.log(`server running at ${PORT}`))