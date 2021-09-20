import { createSlice } from "@reduxjs/toolkit";

const addressesSlice = createSlice({
  name: "addresses",
  initialState: {
    addressList: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    getAddressesPending(state) {
      state.isLoading = true;
    },
    getAddressesSuccess(state, { payload }) {
      state.isLoading = false;
      state.addressList = payload;
      state.error = "";
    },
    getAddressesFailed(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = addressesSlice;

export const { getAddressesPending, getAddressesSuccess, getAddressesFailed } =
  actions;

export default reducer;
