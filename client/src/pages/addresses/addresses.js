import { Fragment, useState, useMemo } from "react";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import "./addresses.styles";
import {
  AddressList,
  Container,
  Left,
  Right,
  StyledSelect,
  PageTitle
} from "./addresses.styles";
import countryList from "react-select-country-list";

const Addresses = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <Fragment>
      <Container>
        <Left>
          <ProfileNavigation />
        </Left>
        <Right>
          <AddressList>
              <PageTitle>Your Addresses</PageTitle>
            <StyledSelect
              options={options}
              value={value}
              onChange={changeHandler}
            />
          </AddressList>
        </Right>
      </Container>
    </Fragment>
  );
};

export default Addresses;
