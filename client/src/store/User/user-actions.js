import { getUserPending, getUserSuccess, getUserFailed } from "./userSlice";
import { fetchUser } from "../Auth/login-actions";

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());

    const user = await fetchUser();
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailed(error.message));
  }
};
