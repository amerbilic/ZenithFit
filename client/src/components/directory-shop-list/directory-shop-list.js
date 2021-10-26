import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDirectoryList,
  fetchGoalsDirectoryList,
} from "../../store/Articles/articles-actions";
import { useParams } from "react-router-dom";
import "./directory-shop-list.styles.scss";
import DirectoryShopItem from "../directory-shop-item/directory-shop-item";

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
    <div className="collections-overview">
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
    </div>
  );
};

export default DirectoryShopList;
