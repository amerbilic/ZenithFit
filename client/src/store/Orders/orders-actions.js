import axios from "axios";
import { ordersActions } from "../index";
import toast from "react-hot-toast";

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

export const fetchOrderData = (orderId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(`/orders/${orderId}`);
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

export const createOrder = (frmData) => {
  return async (dispatch) => {
    const postData = async () => {
      const response = await axios.post("/finalizeOrder", frmData);
      const data = response.data;
      return data;
    };
    try {
      const orderData = await postData();
      dispatch(ordersActions.replaceData(orderData));
    } catch (err) {
      alert(err.message);
    }
  };
};

export const addRating = (frmData) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.post(`/rating`, frmData);
      const data = response.data;
      return data;
    };

    try {
      await fetchData();
      toast.success("Succesfully added rating.");
    } catch (error) {
      console.log(error.response);
      alert(error.response ? error.response.data.error.message : error);
    }
  };
};

export const updateRating = (frmData) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.put(`/rating/${frmData.id}`, frmData);
      const data = response.data;
      return data;
    };

    try {
      await fetchData();
      toast.success("Succesfully updated rating.");
    } catch (error) {
      console.log(error.response);
      alert(error.response ? error.response.data.error.message : error);
    }
  };
};
