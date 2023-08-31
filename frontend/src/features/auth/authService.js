import axios from "axios";

const API_URL = "/api/users";

//Register User //what we were doing from postman
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data)); //bcz locaLstorage can save only string
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const authService = {
  register,
  logout,
  login,
};
export default authService;
