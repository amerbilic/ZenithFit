import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDirectoryList } from "../../store/Articles/articles-actions";
import "./directory-shop-list.styles.scss";
import DirectoryShopItem from "../directory-shop-item/directory-shop-item";

const DirectoryShopList = (props) => {
  const dispatch = useDispatch();
  const { listItems, isLoading } = useSelector((state) => state.articles);
  const directoryId = props.match.params.directoryName;

  useEffect(() => {
    dispatch(fetchDirectoryList(directoryId));
  }, [directoryId, dispatch]);

  return (
    <div className="collections-overview">
      {!isLoading ? (
        listItems
          .map((item) => {
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
