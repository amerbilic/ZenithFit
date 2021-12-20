import styled from "styled-components";
import { mobile } from "../../responsive";

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
export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  ${mobile({
    textAlign:"center"
  })}
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexWrap: "wrap" })}
`;
