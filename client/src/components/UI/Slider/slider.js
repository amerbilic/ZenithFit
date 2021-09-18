import React from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%auto;
`;

const Slides = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
    font-size:70px;
`
const Desc = styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight: 500;
    letter-spacing:3px;
`
const Button = styled.button`
    padding:10px;
    font-size: 20px;
    background:transparent;
    cursor:pointer;
`

export default function Slider() {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slides>
          <ImgContainer>
            <Image src="https://globaljabar.com/wp-content/uploads/2021/02/xbreak-workout_602724-1.jpg.pagespeed.ic_.v8byD7su-e-1.jpg" />
          </ImgContainer>
          <InfoContainer>
              <Title>SUMMER SALE</Title>
              <Desc>DON'T COMPROMISE ON YOURSELF! GET 30% OFF FOR NEW PRODUCTS.</Desc>
              <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slides>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}
