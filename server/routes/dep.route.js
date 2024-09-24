import express from 'express';
import { addDepartment,getAllDepartment,updateDepartment,deleteDepartment } from '../controllers/dep.controller.js';

const DepartmentRoutes = express.Router()

DepartmentRoutes.get('/', getAllDepartment)
DepartmentRoutes.delete('/:id', deleteDepartment)
DepartmentRoutes.put('/:id', updateDepartment)
DepartmentRoutes.post('/', addDepartment);

export default DepartmentRoutes;