import styled from "styled-components";
import Select from "react-select";
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

export const AddressList = styled.div`
  width: 60%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  height: 90%;
  overflow: scroll;
  align-items: center;

  ${mobile({
    width: "95%",
  })}
`;

export const StyledSelect = styled(Select)`
  width: 40%;
  margin-top: 5%;

  ${mobile({
    width: "75%",
  })}
`;

export const PageTitle = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 25px;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 15px;

  ${mobile({
    fontSize: "20px",
  })}
`;

export const NewAddressButton = styled.button`
  margin: 10px 0px;
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

  &:hover {
    background: var(--bg-highlight);
    color: black;
    transition: all 0.3s ease-out;
  }

  ${mobile({
    height: "40px",
    alignItems: "center",
    fontSize: "12px",
    padding: "0",
    width: "140px",
    margin: "10px 0px 20px 0px",
  })}
`;

export const SaveButton = styled.button`
  margin: 10px 0px;
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
  margin-left: 15%;

  &:hover {
    background: var(--bg-highlight);
    color: black;
    transition: all 0.3s ease-out;
  }
  ${mobile({
    height: "40px",
    alignItems: "center",
    fontSize: "12px",
    padding: "0",
    width: "122px",
    margin: "10px 0px 20px 0px",
  })}
`;

export const EditButton = styled.button`
  margin: 10px 0px;
  height: 40px;
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
  width: 10%;

  &:hover {
    background: var(--bg-highlight);
    color: black;
    transition: all 0.3s ease-out;
  }
  ${mobile({
    height: "40px",
    alignItems: "center",
    fontSize: "12px",
    padding: "0",
    width: "140px",
    margin: "10px 0px 20px 0px",
  })}
`;

export const AddressTitle = styled.div`
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Form = styled.form`
  & > .group {
    margin: 0px;
  }

  ${mobile({
    width: "60%",
    margin: "5px",
    padding: "0",
  })}
`;

export const Address = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid gray;
  box-shadow: 2px 2px 10px 1px silver;
  padding-left: 10px;
  color: black;
  width: 90%;
  flex-wrap: wrap;
`;

export const AddressLine = styled.h4`
  font-weight: 500;
  margin: 5px 5px;
`;
export const PostalCode = styled.h4`
  font-weight: 500;
  margin: 5px 5px;
`;
export const City = styled.h4`
  font-weight: 500;
  margin: 5px 5px;
`;
export const Country = styled.h4`
  font-weight: 500;
  margin: 5px 5px;
`;

export const NoAddress = styled.div`
  ${mobile({
    marginLeft: "15px",
  })}
`;
