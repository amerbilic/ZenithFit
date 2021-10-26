import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

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
  ${mobile({
    height: "20vh",
  })}
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
  ${mobile({
    margin: "20px",
    fontSize: "14px",
  })}
`;
const Button = styled(Link)`
  border: none;
  padding: 12px;
  background-color: black;
  cursor: pointer;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #5dfdcb;
    color: black;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  ${mobile({
    padding: "5px",
  })}
`;

function DirectoryItem(props) {
  return (
    <Container>
      <Image src={props.item.imageUrl} />
      <Info>
        <Title>{props.item.title.toUpperCase()}</Title>
        <Button
          to={
            props.gender
              ? `${props.gender}/${props.item.linkUrl}`
              : `${props.item.linkUrl}`
          }
        >
          SHOP NOW
        </Button>
      </Info>
    </Container>
  );
}

export default DirectoryItem;
