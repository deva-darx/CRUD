import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import User from "./Pages/User";
import Department from "./Pages/Department";
import "./index.css";
import Course from "./Pages/Course";

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-100 p-6">
        <nav className="bg-white p-4 shadow-md mb-6 flex justify-center space-x-4">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-700"
                : "text-blue-500 hover:text-blue-700"
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/departments"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-700"
                : "text-blue-500 hover:text-blue-700"
            }
          >
            Departments
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-700"
                : "text-blue-500 hover:text-blue-700"
            }
          >
            Courses
          </NavLink>
        </nav>

        <Routes>
          <Route path="/users" element={<User />} />
          <Route path="/departments" element={<Department />} />
          <Route path="/courses" element={<Course />} />
          <Route path="*" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
