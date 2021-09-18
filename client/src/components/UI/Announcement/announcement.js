import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #EDF2F4;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;

export default function Announcement() {
  return <Container>Amazing offer! Free shipping on orders over 40$</Container>;
}
