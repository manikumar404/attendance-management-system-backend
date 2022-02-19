const express = require('express')
const modules = require('../model/modules.js')

const test = express.Router()


//test.post('/module', async (req, res) => {
    // const { error } = attendanceValidator.validate(req.body)
    // if (error) return res.status(400).json(error)
   

test.post('/module/add-student', async (req, res) => {
    // const { error } = attendanceValidator.validate(req.body)
    // if (error) return res.status(400).json(error)
    const { id ,sid } = req.body

        const newModule = await modules.findOne({_id:id})
         newModule.students.push({id:sid})
        const attendance = await newModule.save()
         res.send(attendance)
       // res.json(newModule)
        //console.log(newModule)

  //  } catch (err) {
    //    res.status(500).json(err)

   // }


})


test.post('/module/add-attendance', async (req, res) => {
    // const { error } = attendanceValidator.validate(req.body)
    // if (error) return res.status(400).json(error)
    const { id ,sid } = req.body
   
        const newModule = await modules.findOne({_id:id})
         newModule.students[0].attendance.push({status:sid})
        const attendance = await newModule.save()
         res.send(attendance)
       // res.json(newModule)
        //console.log(newModule)

  //  } catch (err) {
    //    res.status(500).json(err)

   // }


})
module.exports = test