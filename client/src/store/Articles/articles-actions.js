import axios from "axios";
import { articlesActions } from "../index";

export const fetchArticlesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get("/category/");

      const data = response.data;
      return data;
    };

    try {
      const articleData = await fetchData();
      dispatch(articlesActions.replaceData(articleData));
    } catch (err) {
      alert(err.message);
    }
  };
};

export const fetchCollectionData = (name) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(`/category/articles/${name}`);
      const data = response.data.articles;
      return data;
    };

    try {
      const articleData = await fetchData();
      dispatch(articlesActions.toggleIsLoading(false));
      dispatch(articlesActions.replaceCollectionData(articleData));
    } catch (err) {
      alert(err.message);
    }
  };
};

export const fetchDetailData = (name) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(`/articles/article/${name}`);
      const data = response.data;
      return data;
    };

    try {
      const articleData = await fetchData();

      dispatch(articlesActions.replaceDetailItem(articleData));
    } catch (err) {
      alert(err.message);
    }
  };
};

export const fetchBestSellers = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(`/articles/bestsellers`);
      const data = response.data;
      return data;
    };

    try {
      const articlesData = await fetchData();
      dispatch(articlesActions.replaceBestSellers(articlesData));
    } catch (err) {
      alert(err.message);
    }
  };
};
