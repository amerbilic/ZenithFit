import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import { Fragment } from "react";
import {
  Container,
  Left,
  Right,
  OrdersList,
  Title,
  OrderItem,
  Image,
  OrderNumber,
  Price,
  OrderDetails,
  HorRule,
} from "./orders.styles.js";
const Orders = ({ orders }) => {
  return (
    <Fragment>
      <Container>
        <Left>
          <ProfileNavigation />
        </Left>
        <Right>
          <OrdersList>
            <Title>Your Orders</Title>
            {orders.map((order) => (
              <Fragment key={order.id}>
                <OrderItem>
                  <OrderDetails>
                    <OrderNumber>Order No.00000{order.id}</OrderNumber>
                    <Price>${order.total}</Price>
                  </OrderDetails>
                  {order.order_items
                    .filter((item, idx) => idx < 3)
                    .map((item) => (
                      <Image key={item.article.id} src={item.article.img} />
                    ))}
                </OrderItem>
                <HorRule />
              </Fragment>
            ))}
          </OrdersList>
        </Right>
      </Container>
    </Fragment>
  );
};

export default Orders;
