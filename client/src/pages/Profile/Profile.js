import Footer from "../../components/UI/Footer/footer";
import Newsletter from "../../components/UI/Newsletter/newsletter";
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
                  <RecentOrderWrapper key={item.id}>
                    <RecentOrderTitle>
                      Order No.1212313
                    </RecentOrderTitle>
                    {item.order_items
                      .filter((item, idx) => idx < 3)
                      .map((item) => (
                        <Image key={item.article.id} src={item.article.img} />
                      ))}
                  </RecentOrderWrapper>
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

export default Profile;
