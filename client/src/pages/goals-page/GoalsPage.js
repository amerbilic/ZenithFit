import React from "react";
import { motion } from "framer-motion";
import { Route } from "react-router-dom";
import Footer from "../../components/UI/Footer/footer";
import { useEffect } from "react";
import Newsletter from "../../components/UI/Newsletter/newsletter";
import Directory from "../../components/directory/directory";
import DirectoryShopList from "../../components/directory-shop-list/directory-shop-list";
import { useSelector } from "react-redux";

const GoalsPage = (props) => {
  const goalList = useSelector((state) => state.goals.goalsItems);
  const genderList = useSelector((state) => state.goals.genderList);

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
      <div className="goals-page">
        <Route exact path={`${props.match.path}`}>
          <Directory items={genderList} />
        </Route>
        <Route
          exact
          path={`${props.match.path}/male/`}
          component={() => <Directory items={goalList} gender={"male"} />}
        />
        <Route
          exact
          path={`${props.match.path}/female/`}
          component={() => <Directory items={goalList} gender={"female"} />}
        />
        <Route
          exact
          path={`${props.match.path}/male/:goalName`}
          component={() => <DirectoryShopList goals={1} />}
        />
        <Route
          exact
          path={`${props.match.path}/female/:goalName`}
          component={() => <DirectoryShopList goals={1} />}
        />
      </div>
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default GoalsPage;
