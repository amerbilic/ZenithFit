import React from "react";
import { motion } from "framer-motion";
import { Route } from "react-router-dom";
import Footer from "../../components/UI/Footer/footer";
import { useEffect } from "react";
import Newsletter from "../../components/UI/Newsletter/newsletter";
import DirectoryShopList from "../../components/directory-shop-list/directory-shop-list";

const DirectoryShopPage = (props) => {
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
      <div className="directory-shop-page">
        <Route
          exact
          path={`${props.match.path}/:directoryName`}
          component={DirectoryShopList}
        />
      </div>
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default DirectoryShopPage;
