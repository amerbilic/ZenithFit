import axios from "axios";
import { articlesActions } from "../index";

export const fetchArticlesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/category/");

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
      const response = await axios.get(
        `http://localhost:8000/category/articles/${name}`
      );
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
      const response = await axios.get(
        `http://localhost:8000/articles/${name}`
      );
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
