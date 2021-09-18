import { Fragment, useEffect } from "react";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import {
  Container,
  Left,
  Right,
  TitleRight,
  OrderTitle,
  ProfileBox,
  Text,
  RecentOrders,
  RecentOrderList,
  RecentOrderTitle,
  RecentOrderWrapper,
  Image,
  HorRule,
} from "./profile.styles";

const Profile = ({ user, orders }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Fragment>
      <Container>
        <Left>
          <ProfileNavigation />
        </Left>
        <Right>
          <ProfileBox>
            <TitleRight>Account Home</TitleRight>
            <Text>Welcome {user.username}</Text>
          </ProfileBox>
          <RecentOrders>
            <OrderTitle>Recent Orders</OrderTitle>
            <RecentOrderList>
              {orders
                .filter((item, idx) => idx < 3)
                .map((item) => (
                  <Fragment key={item.id}>
                  <RecentOrderWrapper >
                    <RecentOrderTitle>Order No.00000{item.id}</RecentOrderTitle>
                    {item.order_items
                      .filter((item, idx) => idx < 3)
                      .map((item) => (
                        <Image key={item.article.id} src={item.article.img} />
                      ))}
                  </RecentOrderWrapper>
                  <HorRule/>
                  </Fragment>
                ))}
            </RecentOrderList>
          </RecentOrders>
        </Right>
      </Container>
    </Fragment>
  );
};

export default Profile;
