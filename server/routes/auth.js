const express = require('express')
const Users = require('../model/users.js')
const userValidator = require('../validators/userValidator.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const parseJWT = require('../services/parseJWT.js')

const auth = express.Router()


auth.post('/register',async (req,res)=>{
    const {error} = userValidator.validate(req.body)
    const salt = await  bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password,salt)
    if(error) return res.status(400).json(error.details)
    try{
        const newUser = new Users(
            {
                name:req.body.name,
                email:req.body.email,
                password:hashedPassword,
                userType:req.body.userType
            }
        )
        const user = await newUser.save()
        res.send(user)

    }catch(err){
        res.status(500).json(err)

    }
   
    
})

auth.post('/login',async (req,res)=>{
    const {password,email} = req.body
    
    
   // try{
        const user = await Users.findOne({email})
       //const user = await Users.find()
        !user && res.status(400).json("no credencials")
        const authenticate = await bcrypt.compare(password,user.password)
        if(!authenticate) return res.status(401).json("wrong password")

       // const {password,...others} = user._doc
      // user.password="0"
      const token = jwt.sign({_id:user._id},process.env.SECRET)
        res.status(200)
        res.header('auth-token',token)
        res.send(parseJWT(token))

  //  }catch(err){
        res.status(500).json(err)

  //  }
   
    
})

module.exports =  auth