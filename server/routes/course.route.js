import express from 'express';
import { addCourse,getAllCourse,updateCourse,deleteCourse } from '../controllers/course.controller.js';

const CourseRoutes = express.Router()

CourseRoutes.get('/', getAllCourse)
CourseRoutes.delete('/:id', deleteCourse)
CourseRoutes.put('/:id', updateCourse)
CourseRoutes.post('/', addCourse);

export default CourseRoutes;