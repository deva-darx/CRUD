import axios from 'axios';

const URL = 'http://localhost:8000/department';

export const getDepartments = async () => {
  return axios.get(URL);
};

export const addDepartment = async (department) => {
  return axios.post(URL, department);
};

export const updateDepartment = async (id, department) => {
  return axios.put(`${URL}/${id}`, department);
};

export const deleteDepartment = async (id) => {
  return axios.delete(`${URL}/${id}`);
};