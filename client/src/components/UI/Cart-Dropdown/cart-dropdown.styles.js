import styled from "styled-components";
import Button from "../Button/button";

export const Wrapper = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: #edf2f4;
  top: 65px;
  right: 5px;
  z-index: 5;
  padding: 20px;
`;


export const EmptyMessage = styled.span`
  font-size: 20px;
  margin: 50px auto;
`;

export const Items = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const ButtonCheckout = styled(Button)`
  margin-top: auto;
`;
