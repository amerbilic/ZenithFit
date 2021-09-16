import "./App.scss";
import { Fragment, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { loginSuccess, logOut } from "./store/Auth/loginSlice";
import {getUserSuccess} from './store/User/userSlice';
import { fetchUser } from "./store/Auth/login-actions";
import { Route, Switch, useLocation } from "react-router-dom";
import calculateRemainingTime from "./helpers/calculateRemainingTime";
import jwt_decode from "jwt-decode";

// Pages & Components
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Announcement from "./components/UI/Announcement/announcement";
import Authorization from "./pages/authorization/authorization";
import Checkout from "./pages/checkout/checkout";
import Navbar from "./components/UI/Navbar/navbar";
import Navitem from "./components/UI/Navitem/navitem";
import NavDropDown from "./components/UI/Nav-Dropdown/nav-dropdown";
import HeaderNavbar from "./components/UI/Header-Navbar/header-navbar";
import {
  Protein,
  Performance,
  Vitamins,
  Weight,
  Goals,
} from "./store/Categories/categories";
import ProfilePage from "./pages/Profile/Profile";

const App = () => {
  const dispatch = useDispatch();
  const retrieveStoredToken = async () => {
    const storedToken = localStorage.getItem("accessToken");
    const storedExpirationDate = localStorage.getItem("expTime");
    try {
      if (storedToken) {
        const user = jwt_decode(storedToken);
        const uId = user.sub;
        console.log(uId);
        const fetchedUser = await fetchUser(uId);
        dispatch(getUserSuccess(fetchedUser));
      }
    } catch (err) {
      console.log(err);
    }

    const remainingTime = calculateRemainingTime(storedExpirationDate);
    console.log(remainingTime);

    if (remainingTime <= 3600) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("expTime");
      return null;
    }

    return { token: storedToken, expirationTime: remainingTime };
  };

  useEffect(() => {
    const tokenData = retrieveStoredToken();

    if (tokenData) {
      dispatch(loginSuccess());
    }
  }, []);

  const location = useLocation();
  return (
    <Fragment>
      <div className="sticky">
        <HeaderNavbar />
        <Navbar>
          <Navitem name="Protein">
            <NavDropDown categories={Protein} />
          </Navitem>
          <Navitem name="Performance">
            <NavDropDown categories={Performance} />
          </Navitem>
          <Navitem name="Vitamins">
            <NavDropDown categories={Vitamins} />
          </Navitem>
          <Navitem name="Weight">
            <NavDropDown categories={Weight} />
          </Navitem>
          <Navitem name="Goal Selector">
            <NavDropDown categories={Goals} />
          </Navitem>
        </Navbar>
      </div>
      <Announcement />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/auth" component={Authorization} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
};

export default App;
