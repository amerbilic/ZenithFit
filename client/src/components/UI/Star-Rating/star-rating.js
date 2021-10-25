import { FaStar } from "react-icons/fa";
import "./star-rating.styles.scss";
import { useState } from "react";

const StarRating = (props) => {
  const [rating, setRating] = useState(props.rating ? props.rating.rating : null);
  const [hover, setHover] = useState(null);
  const update = props.rating ? props.rating : 0;


  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              className="star-radio"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                props.onStarClick(ratingValue,props.articleId,update);
              }}
            />
            <FaStar
              className="stars-rating"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(rating!=null ? rating : null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
