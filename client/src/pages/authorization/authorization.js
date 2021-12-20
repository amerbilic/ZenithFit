import styled from "styled-components";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import { motion } from "framer-motion";
import Footer from "../../components/UI/Footer/footer";
import { useEffect } from "react";
import Newsletter from "../../components/UI/Newsletter/newsletter";

const Wrapper = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media only screen and (max-width: 380px) {
    width: 100%;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
  }
`;

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
      <Wrapper>
        <SignIn />
        <SignUp />
      </Wrapper>
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default Authorization;
