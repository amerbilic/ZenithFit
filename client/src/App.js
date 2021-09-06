import "./App.scss";
import { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";

// Pages & Components
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Announcement from './components/UI/Announcement/announcement';
import Authorization from "./pages/authorization/authorization";
import Checkout from "./pages/checkout/checkout";
import Navbar from "./components/UI/Navbar/navbar";
import Navitem from "./components/UI/Navitem/navitem";
import NavDropDown from "./components/UI/Nav-Dropdown/nav-dropdown";
import HeaderNavbar from './components/UI/Header-Navbar/header-navbar';
import {
  Protein,
  Performance,
  Vitamins,
  Weight,
  Goals,
} from "./store/Categories/categories";
import ProfilePage from "./pages/Profile/Profile";

const App = () => {
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
