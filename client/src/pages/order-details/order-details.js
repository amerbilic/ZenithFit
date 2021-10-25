import {
  Container,
  InfoSection,
  Title,
  Paragraph,
  ArticleContainer,
} from "./order-details.styles";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/product/product.";
import StarRating from "../../components/UI/Star-Rating/star-rating";
import { useSelector, useDispatch } from "react-redux";
import { addRating, updateRating } from "../../store/Orders/orders-actions";

const OrderDetails = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const orderId = parseInt(params.orderId);
  const order = props.orders.find((order) => order.id === orderId);
  const loggedInUser = useSelector((state) => state.user.user);

  const starClickHandler = (rating, articleId, update) => {
    if (update === 0) {
      dispatch(
        addRating({
          rating: rating,
          user_id: loggedInUser.id,
          article_id: articleId,
        })
      );
    } else {
      dispatch(
        updateRating({
          rating: rating,
          id:update.id
        })
      );
     
    }
  };

  return (
    <Fragment>
      {order && (
        <Fragment>
          <InfoSection>
            <Paragraph>
              <Title>Total Price: </Title> {order.total}$
            </Paragraph>
            <Paragraph>
              <Title>Order date:</Title> {order.createdAt}
            </Paragraph>
            <Paragraph>
              <Title>Payment method:</Title> {order.payment_details.provider}
            </Paragraph>
          </InfoSection>
          <Container>
            {order.order_items.map((item) => (
              <ArticleContainer key={item.id}>
                <Product
                  name={item.article.name}
                  price={item.article.price}
                  img={item.article.img}
                  review="yes"
                />
                <StarRating
                  onStarClick={starClickHandler}
                  articleId={item.article.id}
                  rating={item.article.rating.find(
                    (rating) => rating.user_id === loggedInUser.id
                  )}
                />
              </ArticleContainer>
            ))}
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
