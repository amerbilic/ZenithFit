import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import { motion } from "framer-motion";
import { Route } from "react-router-dom";
import Collection from "../collection/collection";
import Footer from "../../components/UI/Footer/footer";
import ArticleDetails from "../article-details/article-details";
import { useEffect } from "react";
import Newsletter from "../../components/UI/Newsletter/newsletter";

const ShopPage = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="shop-page">
        <Route
          exact
          path={`${props.match.path}`}
          component={CollectionsOverview}
        />
        <Route
          exact
          path={`${props.match.path}/:collectionId`}
          component={Collection}
        />
        <Route
          exact
          path={`${props.match.path}/:collectionId/:itemId`}
          component={ArticleDetails}
        />
      </div>
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default ShopPage;
