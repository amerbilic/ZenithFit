import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
  background: url("https://globaljabar.com/wp-content/uploads/2021/02/xbreak-workout_602724-1.jpg.pagespeed.ic_.v8byD7su-e-1.jpg")
    center center/cover no-repeat;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  justify-content: center;
  overflow: hidden;
`;

export const Title = styled.h1`
  color: azure;
  padding: 20px 0px;

  ${mobile({
    padding: "0",
    fontSize: "25px",
  })}
`;

export const Paragraph = styled.p`
  color: white;
  font-size: 20px;
  padding: 20px 0px;
`;

export const ButtonsDiv = styled.div`
  margin-top: 20px;
`;
