import {
  getAddressesPending,
  getAddressesSuccess,
  getAddressesFailed,
} from "./userSlice";
import axios from "axios";
import toast from "react-hot-toast";

export const fetchUserAddresses = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`address/${userId}`);
    
  } catch (error) {}
};
