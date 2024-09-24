import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema({
    name:{
        type:"string",
        required: true,
    },
    description:{
        type:"string",
        required: true,
    }
    }, { timestamps: true });

const Course = mongoose.model('Course', CourseSchema);

export default Course;