import React from "react";
import SearchBar from "../Searchbar/searchbar";
import { Fragment, useEffect, useState } from "react";
import CartDropdown from "../Cart-Dropdown/cart-dropdown";
import CartIcon from "../Cart-Icon/cart-icon";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';
import { logOut } from "../../../store/Auth/loginSlice";
import {
  Container,
  LinkItem,
  Wrapper,
  Left,
  LinkLogo,
  Language,
  Center,
  Right,
  MenuItem,
  ToggleHamburger,
  Bar,
} from "./header-navbar.styles";

const HeaderNavbar = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const isAuth = useSelector((state) => state.login.isAuth);
  const dispatch = useDispatch();
  const history = useHistory();

  const cartToggle = useSelector((state) => state.cart.hidden);

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expTime");
    dispatch(logOut());
    axios.get("/logout");
    history.replace("/");
  };

  const toggleMenu = () => {
    setToggleHamburger(!toggleHamburger);
  };

  useEffect(() => {}, [cartToggle]);

  return (
    <Fragment>
      <Container style={toggleHamburger ? { height: "80px" } : null}>
        <Wrapper style={toggleHamburger ? { flexDirection: "column" } : null}>
          <Left>
            <ToggleHamburger href="#" onClick={toggleMenu}>
              <Bar></Bar>
              <Bar></Bar>
              <Bar></Bar>
            </ToggleHamburger>
            <Language>EN</Language>
            <SearchBar placeholder={"Search..."} />
          </Left>
          <Center>
            <LinkLogo to="/">ZENITH FIT.</LinkLogo>
          </Center>
          <Right>
            <LinkItem
              style={toggleHamburger ? { display: "block" } : null}
              to="/shop"
            >
              SHOP
            </LinkItem>
            {isAuth ? (
              <Fragment>
                <LinkItem
                  style={toggleHamburger ? { display: "block" } : null}
                  to="/profile"
                >
                  PROFILE
                </LinkItem>
                <LinkItem
                  style={toggleHamburger ? { display: "block" } : null}
                  as="div"
                  to="/"
                  onClick={logoutHandler}
                >
                  LOGOUT
                </LinkItem>
              </Fragment>
            ) : (
              <LinkItem
                style={toggleHamburger ? { display: "block" } : null}
                to="/auth"
              >
                LOGIN
              </LinkItem>
            )}
            <MenuItem>
              <CartIcon />
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
      <AnimatePresence exitBeforeEnter>
        {cartToggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CartDropdown />
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default HeaderNavbar;
