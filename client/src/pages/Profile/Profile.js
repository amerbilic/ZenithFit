import Footer from "../../components/UI/Footer/footer";
import Newsletter from "../../components/UI/Newsletter/newsletter";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrdersData } from "../../store/Orders/orders-actions";
import { Fragment, useEffect } from "react";
import {logOut} from '../../store/Auth/loginSlice'
import {
  Container,
  Left,
  Right,
  Line,
  Navigation,
  TitleLeft,
  TitleRight,
  OrderTitle,
  ProfileBox,
  Text,
  RecentOrders,
  LogoutLink,
  RecentOrderList,
  OptionList,
  NavLink,
  Icon,
  RecentOrderItem,
} from "./Profile.styles";
import {
  AccountBox,
  ExitToApp,
  Home,
  ListAlt,
  LocationOn,
  Lock,
  Payment,
} from "@material-ui/icons";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.orders.orderList);
  const loggedInUser = useSelector((state) => state.user.user);

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expTime");
    dispatch(logOut());
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log(loggedInUser);
    //dispatch(fetchOrdersData(userId));
  });

  return (
    <Fragment>
      <Container>
        <Left>
          <Navigation>
            <TitleLeft>My Account</TitleLeft>
            <OptionList>
              <NavLink to='/profile'>
                <Icon>
                  <Home />
                </Icon>
                Account Home
              </NavLink>
              <NavLink to='/profile'>
                <Icon>
                  <ListAlt />
                </Icon>
                Your Orders
              </NavLink>
            </OptionList>
            <Line style={{ width: "80%" }} />
            <TitleLeft>Account Settings</TitleLeft>
            <OptionList>
              <NavLink to='/profile'>
                <Icon>
                  <AccountBox />
                </Icon>
                Account Details
              </NavLink>
              <NavLink to='/profile'>
                <Icon>
                  <LocationOn />
                </Icon>
                Addresses
              </NavLink>
              <NavLink to='/profile'>
                <Icon>
                  <Payment />
                </Icon>
                Payment Cards
              </NavLink>
              <NavLink to='/profile'>
                <Icon>
                  <Lock />
                </Icon>
                Change password
              </NavLink>
            </OptionList>
            <Line style={{ width: "80%" }} />
            <OptionList>
              <LogoutLink to='/' onClick={logoutHandler}>
                <Icon>
                  <ExitToApp />
                </Icon>
                Log Out
              </LogoutLink>
            </OptionList>
          </Navigation>
        </Left>
        <Right>
          <ProfileBox>
            <TitleRight>Account Home</TitleRight>
            <Text>Welcome {loggedInUser.username}</Text>
          </ProfileBox>
          <RecentOrders>
            <OrderTitle>Recent Orders</OrderTitle>
            <RecentOrderList>
              {orderList.map((item) => (
                <RecentOrderItem />
              ))}
            </RecentOrderList>
          </RecentOrders>
        </Right>
      </Container>
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default ProfilePage;
