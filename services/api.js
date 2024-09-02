import axios from "axios";

export const getUsers = () => {
  return axios.get("https://reqres.in/api/users");
};

export const createUser = (newUser) => {
  return axios.post("https://reqres.in/api/users", newUser);
};
