import Course from "../models/course.model.js"

  export const addCourse = async (req, res) => {
    try {
      const {name, description} = req.body
      const course = new Course({name ,description})
      await course.save()
      res.status(201).json(Course) 
    } catch (error) {
      res.status(400).json({error:error.message}) 
  }
}
  
  export const getAllCourse = async (req, res) => {
    try {
      const course = await Course.find()
      res.status(200).json(course)
    } catch (error) {
      res.status(400).json({error:error.message})
    }
  }

  
  export const updateCourse = async (req, res) => {
    try {
      const {name , description} =req.body
      const course = await Course.findByIdAndUpdate(req.params.id , {name, description}, { new: true })
      res.status(200).json(course)
    } catch (error) {
      res.status(400).json({error:error.message})
    }
  }
  
  export const deleteCourse = async (req, res) => {
    try {
      await Course.findByIdAndDelete(req.params.id)
      res.json({ message: 'Course deleted' })
    } catch (error) {
      res.status(400).json({error:error.message})
    }
  }