import "./article-details.styles.scss";
import ArticleDetail from "../../components/article-detail/article-detail";
import { useEffect, Fragment } from "react";
const ArticleDetails = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const id = props.match.params.itemId;

  return (
    <Fragment>
      <div className="detail-wrapper">
        <ArticleDetail id={id} />
      </div>
    </Fragment>
  );
};

export default ArticleDetails;
