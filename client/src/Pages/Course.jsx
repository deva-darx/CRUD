import { useState, useEffect } from "react";
import {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} from "../api/course";

const Course = () => {
  const [course, setCourse] = useState([]);
  const [courseForm, setCourseForm] = useState({
    name: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editCourseId, setEditCourseId] = useState(null);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const response = await getCourses();
      console.log(response);
      setCourse(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setCourseForm({ ...courseForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.prevent.default();
    try {
      if (isEditing) {
        await updateCourse(editCourseId, courseForm);
      } else {
        await addCourse(courseForm);
      }
      fetchCourse();
      resetForm;
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (course) => {
    setCourseForm({
      name: course.name,
      description: course.description,
    });
    setIsEditing(true);
    setEditCourseId(course._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCourse(id);
      fetchCourse();
    } catch (error) {
      console.log(error);
    }
  };
  const resetForm = () => {
    setCourseForm({
      name: "",
      description: "",
    });
    isEditing(false);
    editCourseId(null);
  };

  return (
    <div>
      <h1>User</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={courseForm.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={courseForm.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">
          {isEditing ? "Update course" : "Add course"}
        </button>
      </form>
      <ul>
        {course.map((course) => (
          <li key={course._id}>
            <span>{course.name}</span>
            <br></br>
            <span>{course.description}</span>

            <div>
              <button onClick={() => handleEdit(course)}>Edit</button>
              <button onClick={() => handleDelete(course._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Course;
