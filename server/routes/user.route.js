import express from 'express';
import { getAllUser,deleteUser,updateUser,addUser } from '../controllers/user.controller.js';

const UserRoutes = express.Router()

UserRoutes.get('/', getAllUser)
UserRoutes.delete('/:id', deleteUser)
UserRoutes.put('/:id', updateUser)
UserRoutes.post('/', addUser)

export default UserRoutes;