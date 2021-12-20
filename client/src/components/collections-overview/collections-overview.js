import CollectionPreview from "../collections-preview/collection-preview";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticlesData } from "../../store/Articles/articles-actions";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionsOverview = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.articles.listItems);

  useEffect(() => {
    dispatch(fetchArticlesData());
  }, [dispatch]);

  return (
    <Wrapper>
      {collection.map((item) => {
        return (
          <CollectionPreview
            key={item.id}
            title={item.name}
            items={item.articles}
          />
        );
      })}
    </Wrapper>
  );
};

export default CollectionsOverview;
