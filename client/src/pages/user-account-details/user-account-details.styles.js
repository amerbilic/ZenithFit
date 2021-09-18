import styled from "styled-components";
import Button from "../../components/UI/Button/button";

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
`;
export const Right = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const AccountDetails = styled.div`
  width: 60%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  height: 90%;
  align-items: center;
`;

export const Form = styled.form`

  margin-top:5%;

  & > .group {
  }
`;

export const Title = styled.h2`
  padding-top: 15px;
`;

export const SaveButton = styled(Button)`
  height: 50px;
  margin-left:13%;
`;
