import { createSlice } from "@reduxjs/toolkit";
import { calcRating, getRatings } from "../../helpers/calculateRating";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    listItems: [],
    collectionItems: [],
    searchData:[],
    detailItem: [],
    bestSellers:[],
    recommendedArticles:[],
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
    replaceSearchData(state,action){
      state.searchData = action.payload;
    },
    replaceRecommendedArticles(state, action) {
      state.recommendedArticles = action.payload;
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
    replaceBestSellers(state,action){
      state.bestSellers = action.payload;
    }
  },
});

export default articlesSlice;
