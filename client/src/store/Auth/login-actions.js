import axios from "axios";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";

let userId;

export const userLogin = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post("/auth/login", frmData);
      resolve(res.data);
      toast.success("Succesfully logged in!");
      userId = res.data.userId;
      const user = jwt_decode(res.data.accessToken);
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("expTime", user.exp);
      localStorage.setItem(
        "ZenithFit",
        JSON.stringify({ refreshToken: res.data.refreshToken })
      );
    } catch (error) {
      reject(error);
    }
  });
};

export const setUserId = (uId) => {
  userId = uId;
}

export const userRegister = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post("/auth/signup", frmData);
      resolve(res.data);
      userId = res.data.userId;
      toast.success("Succesfully created account!");
      const user = jwt_decode(res.data.accessToken);
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("expTime", user.exp);
      localStorage.setItem(
        "ZenithFit",
        JSON.stringify({ refreshToken: res.data.refreshToken })
      );
    } catch (error) {
      reject(error.response ? error.response.data : error);
    }
  });
};
const storedToken = localStorage.getItem("accessToken");

export const fetchUser = (uId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (uId) userId = uId;
      const res = await axios.get(`/users/${userId}`, {
        headers: { "x-auth-token": storedToken },
      });
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};
