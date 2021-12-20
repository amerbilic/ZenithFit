import React, { useEffect } from "react";
import {
  LoginContainer,
  LoginTitle,
  Wrapper,
  Left,
  Image,
  Right,
  Input,
  Submit,
  Center,
  LineBreak,
  Separator,
  GoogleButton,
  FacebookButton,
  GithubButton,
} from "./LoginPage.styles";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Github from "../../assets/github.png";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const handleGoogle = () => {
    window.open("http://localhost:8000/auth/google","_self")
  }

  const handleFacebook = () => {

  }

  const handleGithub = () => {

  }

  return (
    <LoginContainer>
      <LoginTitle>Choose a Login Method</LoginTitle>
      <Wrapper>
        <Left>
          <GoogleButton onClick={handleGoogle}>
            <Image src={Google} alt="" />
            Google
          </GoogleButton>
          <FacebookButton onClick={handleFacebook}>
            <Image src={Facebook} alt="" />
            Facebook
          </FacebookButton>
          <GithubButton onClick={handleGithub}>
            <Image src={Github} alt="" />
            GitHub
          </GithubButton>
        </Left>
        <Center>
          <LineBreak></LineBreak>
          <Separator>OR</Separator>
        </Center>
        <Right>
          <form>
            <Input type="text" placeholder="Username" />
            <Input type="text" placeholder="Password" />
            <Submit type="submit">Login</Submit>
          </form>
        </Right>
      </Wrapper>
    </LoginContainer>
  );
};

export default LoginPage;
