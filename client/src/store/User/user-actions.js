import { getUserPending, getUserSuccess, getUserFailed } from "./userSlice";
import { fetchUser } from "../Auth/login-actions";
import axios from "axios";
import toast from "react-hot-toast";

const notify = () => toast.success("Successfully updated profile data.");

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());
    const user = await fetchUser();
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailed(error.message));
  }
};

export const updateUser = (props) => {
  return async (dispatch) => {
    const updateData = async () => {
      let response;
      console.log(props.firstName);
      if (!props.password) {
        response = await axios.put(`/users/${props.id}`, {
          firstname: props.firstName,
          lastname: props.lastName,
          username: props.username,
        });
      } else {
        response = await axios.put(`/users/${props.id}`, {
          firstname: props.firstName,
          lastname: props.lastName,
          password: props.currentPassword,
          newPassword: props.password,
        });
      }
      const data = response.data.updatedUser;
      console.log(data);
      return data;
    };

    try {
      const updatedUser = await updateData();
      dispatch(getUserSuccess(updatedUser));
      notify();
    } catch (err) {
      alert(err.message);
    }
  };
};
