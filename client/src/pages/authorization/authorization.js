import "./authorization.styles.scss";
import SignIn from "../../components/Sign-in/sign-in";
import SignUp from "../../components/Sign-up/sign-up";
import { motion } from "framer-motion";
import Footer from "../../components/UI/Footer/footer";
import { useEffect } from "react";
import Newsletter from "../../components/UI/Newsletter/newsletter";

const Authorization = () => {
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
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default Authorization;
