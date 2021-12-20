import styled from "styled-components";
import ArticleDetail from "../../components/article-detail/article-detail";
import { useEffect } from "react";

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 100px auto;
  box-shadow: 0 0 5px #ccc;
`;
const ArticleDetails = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const id = props.match.params.itemId;

  return (
    <Wrapper>
      <ArticleDetail id={id} />
    </Wrapper>
  );
};

export default ArticleDetails;
