const express = require('express')
const Class = require('../model/class.js')
const Attendance = require('../model/attendance.js')
const Users = require('../model/users.js')
const classValidator = require('../validators/classValidator.js')

const tutors = express.Router()


tutors.post('/add-class',async (req,res)=>{
    //const {error} = attendanceValidator.validate(req.body)
    //if(error) return res.status(400).json(error)
    
        const { className, moduleCode, 
            tutor,classStrength,credit } = req.body
        try {
            const newAttendance = new Attendance(
                {
                    className,
                    moduleCode,
                    tutor,
                    classStrength,
                    credit,
    
                }
            )
            const attendance = await newAttendance.save()
            res.send(attendance)
    
        } catch (err) {
            res.status(500).json(err)
    
        }
    
    
    })
   



tutors.delete('/delete-class/:id',async (req,res)=>{
   
    try{
           const deleted = await Attendance.findOneAndDelede({_id:req.params.id})
           !deleted&&res.status(401).json("failed")
         
           res.status(200).json("successful")
    
    }catch(err){
        res.status(500).json(err)

    }
   
    
})


tutors.post('/add-student',async (req,res)=>{
    const { email,id } = req.body
   
    //try{
       
        const newModule = await Attendance.findOne({_id:id})
        const user = await Users.findOne({email})
         newModule.students.push({id:user._id,name:user.name})
         user.moduleList.push({moduleName:newModule.className,id:newModule._id})
        const student = await newModule.save()
         await user.save()
         res.send(student)
    
   // }catch(err){
        res.status(500).json(err)

    //}
   
    
})


tutors.delete('/delete-student',async (req,res)=>{
    const { index,id } = req.body
   
    try{
       
        const newModule = await Attendance.findOne({_id:id})
       
         newModule.students.splice(index,1)
        const student = await newModule.save()
         res.send(student)
    
    }catch(err){
        res.status(500).json(err)

    }
   
    
})


tutors.post('/add-attendance',async (req,res)=>{
    const { status,serial,id } = req.body
   
    try{
       
   
        const newModule = await Attendance.findOne({_id:id})
         newModule.students[serial].attendance.push({status})
        const attendance = await newModule.save()
         res.send(attendance)
    
    }catch(err){
        res.status(500).json(err)

    }
   
    
})


tutors.post('/change-attendance',async (req,res)=>{
    const { status,stdSerial,attSerial,id } = req.body
   
    try{
       
   
        const newModule = await Attendance.findOne({_id:id})
         newModule.students[stdSerial].attendance[attSerial].status = status
        const attendance = await newModule.save()
         res.send(attendance)
    
    }catch(err){
        res.status(500).json(err)

    }
   
    
})






tutors.get('/all-attendance/',async (req,res)=>{
   
    try{
           const attendance = await Attendance.find()
         
           res.status(200).json(attendance)
    
    }catch(err){
        res.status(500).json(err)

    }
   
    
})


tutors.post('/update-class/:id',async (req,res)=>{
    const {error} = classValidator.validate(req.body)
    if(error) return res.status(400).json(error)
    const { className,moduleCode,cerdit} = req.body
    try{
    const claas = await Attendance.findOne({_id:req.params.id})
    claas.className = className
    claas.moduleCode = moduleCode
    claas.cerdit = cerdit
    const updated = await claas.save()
        res.send(updated)

    }catch(err){
        res.status(500).json(err)

    }
   
    
})


    

tutors.get('/my-class/',async (req,res)=>{
   
    try{
           const found = await Attendance.find({tutor:req.id})
         
           res.status(200).json(found)
    
    }catch(err){
        res.status(500).json(err)

    }
   
    
})

module.exports =  tutors