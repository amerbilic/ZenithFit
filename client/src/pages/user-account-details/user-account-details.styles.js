import styled from "styled-components";
import Button from "../../components/UI/Button/button";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const Left = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  right: 30px;
  margin-top: 50px;
  position: relative;

  ${mobile({
    width: "50%",
    right: "20px",
  })}
`;
export const Right = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  ${mobile({
    width: "50%",
  })}
`;

export const AccountDetails = styled.div`
  width: 60%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  height: 90%;
  align-items: center;
  overflow: scroll;

  ${mobile({
    width: "90%",
  })}
`;

export const Form = styled.form`
  margin-top: 5%;

  & > .group {
    margin: 0px;
  }

  ${mobile({
    width: "60%",
    margin: "5px",
    padding: "0",
  })}
`;

export const Title = styled.h2`
  padding-top: 15px;

  ${mobile({
    padding: "15px 5px 0px 10px",
    fontSize: "20px",
  })}
`;

export const SaveButton = styled.button`
  height: 45px;
  align-items: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-out;
  background-color: black;
  color: white;
  border: 1px solid black;
  margin-left: 27%;

  &:hover {
    background: var(--bg-highlight);
    color: black;
    transition: all 0.3s ease-out;
  }

  ${mobile({
    height: "40px",
    alignItems: "center",
    fontSize: "14px",
    padding: "0",
    width: "120px",
    margin: "0px 0px 20px 0px",
  })}
`;
