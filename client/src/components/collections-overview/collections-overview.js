import "./collections-overview.styles.scss";
import CollectionPreview from "../collections-preview/collection-preview";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticlesData } from "../../store/Articles/articles-actions";

const CollectionsOverview = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.articles.listItems);

  useEffect(() => {
    dispatch(fetchArticlesData());
  }, [dispatch]);

  return (
    <div className="collections-overview">
      {collection.map((item) => {
        return (
          <CollectionPreview
            key={item.id}
            title={item.name}
            items={item.articles}
          />
        );
      })}
    </div>
  );
};

export default CollectionsOverview;
