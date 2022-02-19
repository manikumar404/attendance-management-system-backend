const express = require('express')
const Users = require('../model/users.js')
const Attendance = require('../model/attendance.js')
const { stdin } = require('nodemon/lib/config/defaults')

const students = express.Router()


students.get('/my-modules/:id',async (req,res)=>{
   try{
    const user = await Users.find({id:req.params.id})
    const moduleList = user.moduleList
   
    res.status(200).json(moduleList)
   }
   catch(err){
       res.status(500).json(err)
   }
})

students.get('/my-attendance/:id',async (req,res)=>{
    const id = req.body.index
    try{
     const attendance = await Attendance.findOne({id:req.params.id})
     const index = attendance.students.findIndex(stud => stud.id===id)
     const attList = attendance.students[index]
    
     res.status(200).json(attList)
    }
    catch(err){
        res.status(500).json(err)
    }
 })

 students.post('/put-present/:id', async (req,res)=>{
     const id = req.body.id
     try{
        const attendance = await Attendance.findOne({id:req.params.id})
        const index = attendance.students.findIndex(stud => stud.id===id)
        const attList = await attendance.students[index].push({status:'P'}).save()
       
        res.status(200).json(attList)


     }
     catch(err){
        res.status(500).json(err)
    }


 })
 


module.exports =  students