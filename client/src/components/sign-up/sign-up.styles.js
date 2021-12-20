import styled from "styled-components";
import { mobile } from "../../responsive";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  ${mobile({
    width: "280px",
  })}
`;

export const Title = styled.h2`
  margin: 10px 0px;
`;
