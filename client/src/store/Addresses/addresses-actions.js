import {
  getAddressesPending,
  getAddressesSuccess,
  getAddressesFailed,
} from "./adressesSlice";
import axios from "axios";
import toast from "react-hot-toast";

export const fetchUserAddresses = (userId) => async (dispatch) => {
  try {
    dispatch(getAddressesPending);
    const res = await axios.get(`/address/user/${userId}`);
    dispatch(getAddressesSuccess(res.data));
  } catch (error) {
    dispatch(getAddressesFailed(error.message));
  }
};

export const postUserAddress = (frmData) => async (dispatch) => {
  try {
    const res = await axios.post(`/address/`, frmData);
    if (res.data) toast.success("Succesfully added new address!");
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch(getAddressesFailed(error.message));
  }
};

export const deleteUserAddress = (addressId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/address/${addressId}`);
    if (res.data) toast.success("Succesfully deleted address!");
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch(getAddressesFailed(error.message));
  }
};
