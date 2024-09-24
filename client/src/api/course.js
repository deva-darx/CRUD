import axios from 'axios';

const URL = 'http://localhost:8000/course';

export const getCourses = async () => {
  return axios.get(URL);
};

export const addCourse = async (course) => {
  return axios.post(URL, course);
};

export const updateCourse = async (id, course) => {
  return axios.put(`${URL}/${id}`, course);
};

export const deleteCourse = async (id) => {
  return axios.delete(`${URL}/${id}`);
};