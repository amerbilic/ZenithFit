import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 20px 60px;
  ${mobile({
    display: "block",
    margin: "0",
    padding: "15px",
  })}
`;

export const Title = styled(Link)`
  font-size: 25px;
  margin-bottom: 25px;
  font-weight: 600;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexWrap: "wrap",
  })}
`;
