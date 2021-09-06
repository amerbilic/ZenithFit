import Footer from "../../components/UI/Footer/footer";
import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Newsletter from "../../components/UI/Newsletter/newsletter";
import styled from "styled-components";
import {
  AccountBox,
  ExitToApp,
  Home,
  ListAlt,
  LocationOn,
  Lock,
  Payment,
} from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Left = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  right:30px;
  margin-top: 50px;
  position: relative;
`;
const Right = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Line = styled.hr`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(204, 204, 204);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
  margin-left: 30px;
  margin-top: 20px;
`;

const Navigation = styled.div`
  width: 50%;
  height: 90%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const TitleLeft = styled.h2`
  display: flex;
  justify-content: flex-start;
  padding: 20px 0px 10px 30px;
`;

const TitleRight = styled.h1`
  display: flex;
  justify-content: flex-start;
`;

const OrderTitle = styled.h2`
  padding: 10px 0px 10px 30px;
`;

const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  list-style: none;
`;

const Icon = styled.div`
  display: flex;
  padding-right: 20px;
`;

const ProfileBox = styled.div`
  height: 20%;
  width: 60%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Text = styled.span`
  font-weight: 500;
`;

const RecentOrders = styled.div`
  width: 60%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const LogoutLink = styled(Link)`
  margin: 15px 0px;
  padding: 10px 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding-left: 40px;

  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background: var(--bg-highlight);
  }
`;

const NavLink = styled(Link)`
  padding: 10px 0px;
  padding-left: 40px;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background: var(--bg-highlight);
  }
`;

const RecentOrderList = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <Fragment>
      <Container>
        <Left>
          <Navigation>
            <TitleLeft>My Account</TitleLeft>
            <OptionList>
              <NavLink>
                <Icon>
                  <Home />
                </Icon>
                Account Home
              </NavLink>
              <NavLink>
                <Icon>
                  <ListAlt />
                </Icon>
                Your Orders
              </NavLink>
            </OptionList>
            <Line style={{ width: "80%" }} />
            <TitleLeft>Account Settings</TitleLeft>
            <OptionList>
              <NavLink>
                <Icon>
                  <AccountBox />
                </Icon>
                Account Details
              </NavLink>
              <NavLink>
                <Icon>
                  <LocationOn />
                </Icon>
                Addresses
              </NavLink>
              <NavLink>
                <Icon>
                  <Payment />
                </Icon>
                Payment Cards
              </NavLink>
              <NavLink>
                <Icon>
                  <Lock />
                </Icon>
                Change password
              </NavLink>
            </OptionList>
            <Line style={{ width: "80%" }} />
            <OptionList>
              <LogoutLink>
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
            <Text>Welcome Amer</Text>
          </ProfileBox>
          <RecentOrders>
            <OrderTitle>Recent Orders</OrderTitle>
            <RecentOrderList>Order goes here</RecentOrderList>
          </RecentOrders>
        </Right>
      </Container>
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default ProfilePage;
