import {
  AccountBox,
  ExitToApp,
  Home,
  ListAlt,
  LocationOn,
} from "@material-ui/icons";
import {
  Line,
  Navigation,
  TitleLeft,
  LogoutLink,
  OptionList,
  NavLink,
  Icon,
} from "./profile-navigation.styles";
import { logOut } from "../../store/Auth/loginSlice";
import { useDispatch } from "react-redux";

const ProfileNavigation = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expTime");
    dispatch(logOut());
  };

  return (
    <Navigation>
      <TitleLeft>My Account</TitleLeft>
      <OptionList>
        <NavLink to="/profile">
          <Icon>
            <Home />
          </Icon>
          Account Home
        </NavLink>
        <NavLink to="/profile/orders">
          <Icon>
            <ListAlt />
          </Icon>
          Your Orders
        </NavLink>
      </OptionList>
      <Line style={{ width: "80%" }} />
      <TitleLeft>Account Settings</TitleLeft>
      <OptionList>
        <NavLink to="/profile/account">
          <Icon>
            <AccountBox />
          </Icon>
          Account Details
        </NavLink>
        <NavLink to="/profile/addresses">
          <Icon>
            <LocationOn />
          </Icon>
          Addresses
        </NavLink>
      </OptionList>
      <Line style={{ width: "80%" }} />
      <OptionList>
        <LogoutLink to="/" onClick={logoutHandler}>
          <Icon>
            <ExitToApp />
          </Icon>
          Log Out
        </LogoutLink>
      </OptionList>
    </Navigation>
  );
};

export default ProfileNavigation;
