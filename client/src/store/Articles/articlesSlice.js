import { createSlice } from "@reduxjs/toolkit";
import { calcRating, getRatings } from "../../helpers/calculateRating";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    listItems: [],
    collectionItems: [],
    detailItem: [],
    rating: 0,
    isLoading: true,
  },
  reducers: {
    replaceData(state, action) {
      state.listItems = action.payload;
    },
    replaceCollectionData(state, action) {
      state.collectionItems = action.payload;
    },
    replaceDetailItem(state, action) {
      state.detailItem = action.payload;
      const ratingScores = action.payload.rating.map(getRatings);
      const totalRating = ratingScores.reduce(calcRating, 0);
      const averageRating = totalRating / ratingScores.length;
      state.rating = averageRating;
    },
    toggleIsLoading(state,action) {
      state.isLoading = action.payload;
    },
  },
});

export default articlesSlice;
