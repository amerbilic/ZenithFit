import React from "react";
import { Search } from "@material-ui/icons";
import { Fragment, useEffect } from "react";
import CartDropdown from "../Cart-Dropdown/cart-dropdown";
import CartIcon from "../Cart-Icon/cart-icon";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { logOut } from "../../../store/Auth/loginSlice";
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
  const isAuth = useSelector((state) => state.login.isAuth);
  const dispatch = useDispatch();
  const history = useHistory();

  const cartToggle = useSelector((state) => state.cart.hidden);

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expTime");
    dispatch(logOut());
    history.replace("/");
  };

  useEffect(() => {}, [cartToggle]);

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
            {isAuth ? (
              <Fragment>
                <LinkItem to="/profile">PROFILE</LinkItem>
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
