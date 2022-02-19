const jwt = require('jsonwebtoken')

module.exports = function verify(req,res,next){
    const token = req.header('auth-token')
    if(!token) return res.status(401).json('access denied')
   try{
    const access = jwt.verify(token,process.env.SECRET)
    req.user = access
    next()
    
}catch(err){
    res.status(400).json('you dont have access')
}
   }