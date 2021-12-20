import { Wrapper, Title, Items, Loading} from './collection.styles'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fetchCollectionData } from "../../store/Articles/articles-actions";
import { articlesActions } from "../../store/index";
import Product from "../../components/product/product.";

const Collection = (props) => {
  const isLoading = useSelector((state) => state.articles.isLoading);
  const collectionId = props.match.params.collectionId;
  const { toggleIsLoading, replaceCollectionData } = articlesActions;
  const dispatch = useDispatch();
  const collectionItems = useSelector(
    (state) => state.articles.collectionItems
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(replaceCollectionData([]));
    dispatch(toggleIsLoading(true));
    dispatch(fetchCollectionData(collectionId));
  }, [collectionId, dispatch, toggleIsLoading, replaceCollectionData]);

  if (isLoading) {
    return (
      <section>
        <Loading >Loading...</Loading>
      </section>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Wrapper >
        <Title >{collectionId.toUpperCase()}</Title>
        <Items >
          {!isLoading ? (
            collectionItems.map((item) => <Product key={item.id} {...item} />)
          ) : (
            <div>Loading...</div>
          )}
        </Items>
      </Wrapper>
    </motion.div>
  );
};

export default Collection;
