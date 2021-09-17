import { motion } from "framer-motion";
import { Route } from "react-router-dom";
import Footer from "../../components/UI/Footer/footer";
import Orders from "../orders/orders";
import { useEffect } from "react";
import Newsletter from "../../components/UI/Newsletter/newsletter";
import Profile from "../profile/profile";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersData } from "../../store/Orders/orders-actions";

const UserProfile = (props) => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orders.orderList);
  const loggedInUser = useSelector((state) => state.user.user);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (loggedInUser.username) dispatch(fetchOrdersData(loggedInUser.id));
  }, [loggedInUser, dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Route exact path={`${props.match.path}`}>
        <Profile orders={orderList} user={loggedInUser} />
      </Route>
      <Route exact path={`${props.match.path}/orders`}>
        <Orders orders={orderList} />
      </Route>
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default UserProfile;
