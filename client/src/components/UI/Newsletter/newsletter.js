import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobile} from '../../../responsive'

const Container = styled.div`
  height: 50vh;
  width:100%;
  background: #edf2f4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({
    height:"30vh",
  })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({
    fontSize:"40px"
  })}
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300p;
  margin-bottom: 20px;
  ${mobile({
    fontSize:"15px",
    textAlign:"center"
  })}
`;
const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({
    justifyContent:"center",
    width:"80%"
  })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;

  &:focus {
    outline: none;
  }

  ${mobile({
    padding:"0px",
  })}
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;

`;

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates for your favorite products and discounts.
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
