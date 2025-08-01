import express from 'express'
import StudentModel from '../Model/model.js'

const StudentRouter = express.Router()

//get all students
StudentRouter.get('/', async (req,res)=>{
    try {
        const students = await StudentModel.find()
        res.json(students)
    } catch (err) {
    res.status(500).json({message: err.message})        
    }
})
//get a single student
StudentRouter.get('/:id', async (req,res)=>{
    try {
        const student = await StudentModel.findById(req.params.id)
        if(!student) return res.status(404).json({message : 'user not found'})
            res.json(student)
        
    } catch (err) {
        res.status(500).json({message: err.message})    
    }
    })
//Add new student 
StudentRouter.post('/', async (req,res)=>{
    try {
        const newStudent = await StudentModel.create(req.body)
        res.status(201).json(newStudent)
        
    } catch (err) {
        res.status(400).json({message: err.message})    
    }
    })
//update a student
StudentRouter.put('/:id', async (req,res)=>{
    try {
        const updateStudent = await StudentModel.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        })
        if(!updateStudent) return res.status(404).json({message : 'user not found'})
            res.json(updateStudent)
        
    } catch (err) {
        res.status(400).json({message: err.message})    
    }
    })

//delete a student
StudentRouter.delete('/:id', async (req,res)=>{
    try {
        const deletedStudent = await StudentModel.findByIdAndDelete(req.params.id)
        if(!deletedStudent) return res.status(404).json({message : 'user not found'})
            res.json({message : 'student delete'})

    } catch (err) {
        res.status(500).json({message: err.message})    
    }
    })

export default StudentRouter;