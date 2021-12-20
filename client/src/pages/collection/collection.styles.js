import styled from "styled-components";
import { mobile } from "../../responsive";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 20px 60px;

  ${mobile({
    flexDirection: "row",
    margin: "0",
    padding: "15px",
    flexWrap: "wrap",
    justifyContent: "space-between",
  })}
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
  ${mobile({
    fontSize: "30px",
  })}
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  ${mobile({
    display: "flex",
    flexWrap: "wrap",
  })}
`;

export const Loading = styled.p`
  text-align: center;
  color: teal;
  font-size: 40px;
`;
