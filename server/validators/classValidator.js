const joi = require('joi')

const classValidator = joi.object({

    className:joi.string().min(5).required(),
    moduleCode:joi.string().min(5).required(),
    tutor:joi.string().min(5).required(),
    classStrength:joi.number(),
    cerdit:joi.number().max(12)
})

module.exports = classValidator