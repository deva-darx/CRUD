import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department', 
        required: true,
      },
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', 
        required: true,
      },
      
    }, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;