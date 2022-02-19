const express = require('express')
const Users = require('../model/users.js')
const Attendance = require('../model/attendance.js')
const attendanceValidator = require('../validators/attendanceValidator.js')
const userValidator = require('../validators/userValidator.js')
const verify = require('../services/verify.js')

const joi = require('joi')


const common = express.Router()


common.post('/update-password',async (req,res)=>{
    // const {error} = userValidator.validate(req.body)
    // if(error) return res.status(400).json(error.details[0].message)
   
    try{
           const updated = await Users.findOneAndUpdate({email:req.body.email,password:req.body.password},{password:req.body.newPassword})
          !updated && res.status(401).json("you are not allowed to update")

           res.status(200).json("successful")
    
    }catch(err){
        res.status(500).json(err)

    }
   
    
})


module.exports =  common