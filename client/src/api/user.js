import axios from 'axios';

const URL = 'http://localhost:8000/users';

export const getUsers = async () => {
  return axios.get(URL);
};

export const addUser = async (user) => {
  return axios.post(URL, user);
};

export const updateUser = async (id, user) => {
  return axios.put(`${URL}/${id}`, user);
};

export const deleteUser = async (id) => {
  return axios.delete(`${URL}/${id}`);
};
