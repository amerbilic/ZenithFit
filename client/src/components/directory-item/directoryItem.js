import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 50vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  background-color: black;
  margin: 20px;
  padding: 5px 10px;
`;
const Button = styled.button`
  border: none;
  padding: 12px;
  background-color: black;
  cursor: pointer;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #5DFDCB;
    color:black;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;

function DirectoryItem({ item }) {
  return (
    <Container>
      <Image src={item.imageUrl} />
      <Info>
        <Title>{item.title.toUpperCase()}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}

export default DirectoryItem;