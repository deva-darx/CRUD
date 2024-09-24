import { useState, useEffect } from "react";
import {
  getDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
} from "../api/department.js";

const Department = () => {
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editDepartmentId, setEditDepartmentId] = useState(null);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await getDepartments();
      console.log(response);
      setDepartments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.trim()) {
      try {
        if (isEditing) {
          await updateDepartment(editDepartmentId, { name: formData.name });
        } else {
          await addDepartment({ name: formData.name });
        }
        fetchDepartments();
        resetForm();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEdit = (department) => {
    setFormData({ name: department.name });
    setIsEditing(true);
    setEditDepartmentId(department._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDepartment(id);
      fetchDepartments();
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({ name: "" });
    setIsEditing(false);
    setEditDepartmentId(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleFormSubmit} className="space-y-4 mb-6">
          <div>
            <input
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Department Name"
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white ${
              isEditing
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isEditing ? "Update Department" : "Add Department"}
          </button>
        </form>
        <ul className="space-y-4">
          {departments.map((department) => (
            <li
              key={department._id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm"
            >
              <span>{department.name}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(department)}
                  className="px-3 py-1 bg-zinc-500 text-white rounded-md hover:bg-zinc-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(department._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Department;
