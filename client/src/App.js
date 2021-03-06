import "./App.scss";
import { Fragment, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logOut } from "./store/Auth/loginSlice";
import { fetchSearchBarData } from "./store/Articles/articles-actions";
import { fetchUser } from "./store/Auth/login-actions";
import { getUserSuccess } from "./store/User/userSlice";
import { Route, Switch, useLocation, Link } from "react-router-dom";
import calculateRemainingTime from "./helpers/calculateRemainingTime";
import jwt_decode from "jwt-decode";

// Pages & Components
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Authorization from "./pages/authorization/authorization";
import Announcement from "./components/UI/Announcement/announcement";
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
} from "./store/Categories/categories";
import UserProfile from "./pages/user-profile/user-profile";
import { Toaster } from "react-hot-toast";
import DirectoryShopPage from "./pages/directory-shop/directory-shop";
import GoalsPage from "./pages/goals-page/GoalsPage";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.login.isAuth);
  const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem("accessToken");
    const storedExpirationDate = localStorage.getItem("expTime");

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 3600) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("expTime");
      return null;
    }

    return { token: storedToken, expirationTime: remainingTime };
  };

  const fetchUserData = async () => {
    try {
      const tokenData = retrieveStoredToken();
      if (tokenData) {
        const user = jwt_decode(tokenData.token);
        const uId = user.sub;
        const fetchedUser = await fetchUser(uId);
        dispatch(getUserSuccess(fetchedUser));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      await fetchUserData();
    };
    fetchUser();
    dispatch(fetchSearchBarData());
  }, []);

  useEffect(() => {
    const tokenData = retrieveStoredToken();
    if (tokenData) {
      dispatch(loginSuccess());
      setTimeout(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("expTime");
        dispatch(logOut());
      }, tokenData.expirationTime);
    }
  }, [dispatch]);

  const location = useLocation();
  return (
    <Fragment>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background:
                "linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)",
              color: "white",
            },
          },
        }}
      />
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
          <Link className="GoalSelector" to="/goals">
            Goals
          </Link>
        </Navbar>
      </div>
      <Announcement />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/auth" component={Authorization} />
          <Route exact path="/checkout" component={Checkout} />
          {!isAuth ? (
            <Route path="/profile" component={Authorization} />
          ) : (
            <Route path="/profile" component={UserProfile} />
          )}
          <Route path="/directory" component={DirectoryShopPage} />
          <Route path="/goals" component={GoalsPage} />
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
};

export default App;
