import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orderList: [],
  },
  reducers: {
    replaceData(state, action) {
      state.orderList = action.payload;
    },
  },
});

export default ordersSlice;
