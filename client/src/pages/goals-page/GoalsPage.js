import React from "react";
import { motion } from "framer-motion";
import { Route } from "react-router-dom";
import Footer from "../../components/UI/Footer/footer";
import { useEffect } from "react";
import Newsletter from "../../components/UI/Newsletter/newsletter";
import Directory from "../../components/directory/directory";
import { useSelector } from "react-redux";

const GoalsPage = (props) => {
  const goalList = useSelector((state) => state.goals.goalsItems);
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
          <Directory items={goalList} />
        </Route>
      </div>
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default GoalsPage;
