const joi = require('joi')

const attendanceValidator =joi.object( {

    className:joi.string().min(5).required(),
    moduleCode:joi.string().min(5).required(),
    studentName:joi.string().min(5).required(),
    studentMail:joi.string().min(5).required().email(),
    status:joi.string().valid('A','P'),
    attendanceId:joi.string().min(5),
    userType:joi.string()
})

module.exports = attendanceValidator