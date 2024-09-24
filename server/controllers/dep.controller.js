import Department from '../models/dep.model.js'

  export const addDepartment = async (req, res) => {
    try {
      const {name} = req.body
      const department = new Department({name})
      await department.save()
      res.status(201).json(department) 
    } catch (error) {
      res.status(400).json({error:err.message}) 
  }
}
  
  export const getAllDepartment = async (req, res) => {
    try {
      const department = await Department.find()
      res.status(200).json(department)
    } catch (error) {
      res.status(400).json({error:error.message})
    }
  }

  
  export const updateDepartment = async (req, res) => {
    try {
      const {name} =req.body
      const department = await Department.findByIdAndUpdate(req.params.id , {name}, { new: true })
      res.status(200).json(department)
    } catch (error) {
      res.status(400).json({error:error.message})
    }
  }
  
  export const deleteDepartment = async (req, res) => {
    try {
      await Department.findByIdAndDelete(req.params.id)
      res.json({ message: 'Department deleted' })
    } catch (error) {
      res.status(400).json({error:error.message})
    }
  }