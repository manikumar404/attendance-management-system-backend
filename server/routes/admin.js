const express = require('express')
const Users = require('../model/users.js')

const admin = express.Router()


admin.delete('/delete-account/',async (req,res)=>{
   
    try{
           const deleted = await Users.findOneAndDelete({email:req.body.email})
           res.status(200).json("successful")
    
    }catch(err){
        res.status(500).json(err)

    }
   
    
})

admin.get('/all-accounts/',async (req,res)=>{
   
    try{
           const all = await Users.find()
           res.status(200).json(all)
    
    }catch(err){
        res.status(500).json(err)

    }
   
    
})

module.exports =  admin