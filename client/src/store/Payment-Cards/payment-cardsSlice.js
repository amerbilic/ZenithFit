import { createSlice } from "@reduxjs/toolkit";

const paymentCardsSlice = createSlice({
    name: "paymentCards",
    initialState: {
      cardsList: [],
      isLoading: false,
      error: "",
    },
    reducers: {
      getCardsPending(state) {
        state.isLoading = true;
      },
      getCardsSuccess(state, { payload }) {
        state.isLoading = false;
        state.cardsList = payload;
        state.error = "";
      },
      getCardsFailed(state, { payload }) {
        state.isLoading = false;
        state.error = payload;
      },
    },
  });
  
  const { reducer, actions } = paymentCardsSlice;
  
  export const { getCardsPending, getCardsSuccess, getCardsFailed } = actions;
  
  export default reducer;
  