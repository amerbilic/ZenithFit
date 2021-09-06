import React from "react";
import { Search } from "@material-ui/icons";
import { Fragment } from "react";
import AuthContext from "../../../store/auth-context";
import { useContext } from "react";
import CartDropdown from "../Cart-Dropdown/cart-dropdown";
import CartIcon from "../Cart-Icon/cart-icon";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  LinkItem,
  Wrapper,
  Left,
  LinkLogo,
  Language,
  SearchContainer,
  Input,
  Center,
  Right,
  MenuItem,
} from "./header-navbar.styles";

const HeaderNavbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const cartToggle = useSelector((state) => state.cart.hidden);

  useEffect(() => {
    console.log(cartToggle);
  }, [cartToggle]);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Fragment>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search..." />
              <Search style={{ color: "teal", fontSize: 20 }} />
            </SearchContainer>
          </Left>
          <Center>
            <LinkLogo to="/">ZENITH FIT.</LinkLogo>
          </Center>
          <Right>
            <LinkItem to="/shop">SHOP</LinkItem>
            <LinkItem to="/contact">CONTACT</LinkItem>
            {isLoggedIn ? (
              <Fragment>
                <LinkItem as="div" to="/">
                  PROFILE
                </LinkItem>
                <LinkItem as="div" to="/" onClick={logoutHandler}>
                  LOGOUT
                </LinkItem>
              </Fragment>
            ) : (
              <LinkItem to="/auth">LOGIN</LinkItem>
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
