import "./collection.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fetchCollectionData } from "../../store/Articles/articles-actions";
import Product from "../../components/Product/product.";

const Collection = (props) => {
  const isLoading = useSelector((state) => state.articles.isLoading);
  const collectionId = props.match.params.collectionId;
  const dispatch = useDispatch();
  const collectionItems = useSelector(
    (state) => state.articles.collectionItems
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(fetchCollectionData(collectionId));
  }, [collectionId, dispatch]);

  if (isLoading) {
    return (
      <section>
        <p className='collection-loading'>Loading...</p>
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
      <div className="collection-page">
        <h2 className="title">{collectionId.toUpperCase()}</h2>
        <div className="items">
          {collectionItems.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Collection;
