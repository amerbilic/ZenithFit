import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDirectoryList,
  fetchGoalsDirectoryList,
} from "../../store/Articles/articles-actions";
import { useParams } from "react-router-dom";
import DirectoryShopItem from "../directory-shop-item/directory-shop-item";
import styled from "styled-components";

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
`;

const DirectoryShopList = (props) => {
  const dispatch = useDispatch();
  const { listItems, isLoading } = useSelector((state) => state.articles);
  const { goalName } = useParams();

  useEffect(() => {
    if (props.goals) {
      dispatch(fetchGoalsDirectoryList(goalName));
    } else {
      dispatch(fetchDirectoryList(props.match.params.directoryName));
    }
  }, []);

  return (
    <Overview>
      {!isLoading ? (
        listItems.map((item) => {
          return (
            <DirectoryShopItem
              key={item.id}
              title={item.name}
              items={item.articles}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
      {}
    </Overview>
  );
};

export default DirectoryShopList;
