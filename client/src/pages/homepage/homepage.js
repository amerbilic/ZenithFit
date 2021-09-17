import React from "react";
import Directory from "../../components/directory/directory";
import Hero from "../../components/UI/Hero/hero";
import { motion } from "framer-motion";
import Footer from "../../components/UI/Footer/footer";
import { useEffect } from "react";
import Newsletter from "../../components/UI/Newsletter/newsletter";
import Products from "../../components/products/Products";

const HomePage = () => {
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
      <Hero />
      <Directory />
      <Products />
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default HomePage;
