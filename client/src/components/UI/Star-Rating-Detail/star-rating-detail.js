import { FaStar } from "react-icons/fa";
import "./star-rating-detail.styles.scss";

const StarRatingDetail = (props) => {
  const rating = props.rating;

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <FaStar
              className="stars"
              color={ratingValue <= (rating) ? "#ffc107" : "#e4e5e9"}
              size={props.size}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRatingDetail;
