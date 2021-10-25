import styled from "styled-components";
import Select from "react-select";
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

export const AddressList = styled.div`
  width: 60%;
  background: #edf2f4;
  display: flex;
  flex-direction: column;
  height: 90%;
  overflow: scroll;
  align-items: center;
`;

export const StyledSelect = styled(Select)`
  width: 40%;
  margin-top: 5%;
`;

export const PageTitle = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 25px;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const NewAddressButton = styled(Button)`
  margin: 10px 0px;
  height: 45px;
  align-items: center;
`;

export const SaveButton = styled(Button)`
  margin: 10px 0px;
  height: 50px;
  margin-left: 15%;
`;

export const EditButton = styled(Button)`
  margin: 10px 10px;
  height: 40px;
  width: 10%;
  align-items: center;
`;

export const AddressTitle = styled.div`
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Form = styled.form``;

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
