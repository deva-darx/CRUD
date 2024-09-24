import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import DepartmentRoutes from './routes/dep.route.js'
import UserRoutes from './routes/user.route.js';
import CourseRoutes from './routes/course.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000; 

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000",
}));

app.use("/users", UserRoutes)
app.use("/department", DepartmentRoutes)
app.use("/course", CourseRoutes)

const startServer = async () => {
    try {
      await connectDB(); 
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error('Failed to connect to the database', error);
      process.exit(1);
    }
  };
  startServer()