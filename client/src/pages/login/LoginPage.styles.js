import styled from "styled-components";
import FormInput from "../../components/form-input/form-input";
import Button from "../../components/UI/Button/button";

export const LoginTitle = styled.h1`
  text-align: center;
  margin-bottom: 0.9rem;
`;

export const LoginContainer = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 60%;
  height: 75%;
  box-shadow: 0px 5px 33px -20px rgba(66, 66, 66, 0.8);
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginButton = styled.div`
  width: 150px;
  padding: 15px 25px;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(FormInput)`
  width: 250px;
  height: 30px;
  padding: 10px;
`;

export const Submit = styled(Button)`
  background: black;
  border-radius: 5px;
  width:12rem;
`;

export const Center = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LineBreak = styled.div`
  width: 0.5px;
  height: 70%;
  background-color: lightgray;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -1;
`;

export const Separator = styled.div`
  border: 2px solid lightgray;
  border-radius: 50%;
  padding: 10px;
  color: gray;
  background-color: white;
  font-weight: bold;
`;

export const GoogleButton = styled(LoginButton)`
  background-color: #df4930;
`;
export const FacebookButton = styled(LoginButton)`
  background-color: #507cc0;
`;
export const GithubButton = styled(LoginButton)`
  background-color: black;
`;
