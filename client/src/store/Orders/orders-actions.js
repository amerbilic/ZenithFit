import axios from "axios";
import { ordersActions } from "../index";

export const fetchOrdersData = (userId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(`/orders/user/${userId}`);

      const data = response.data;
      return data;
    };

    try {
      const orderData = await fetchData();
      dispatch(ordersActions.replaceData(orderData));
    } catch (err) {
      alert(err.message);
    }
  };
};
