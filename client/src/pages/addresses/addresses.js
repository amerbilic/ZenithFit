import { Fragment, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import "./addresses.styles";
import {
  AddressList,
  Container,
  Left,
  Right,
  StyledSelect,
  PageTitle,
  Address,
  NewAddressButton,
  Form,
  SaveButton,
  AddressLine,
  City,
  Country,
  PostalCode,
  EditButton,
  AddressTitle,
  ButtonContainer,
  NoAddress
} from "./addresses.styles";
import countryList from "react-select-country-list";
import {
  fetchUserAddresses,
  postUserAddress,
  deleteUserAddress,
} from "../../store/Addresses/addresses-actions";
import FormInput from "../../components/form-input/form-input";

const Addresses = () => {
  const dispatch = useDispatch();
  const options = useMemo(() => countryList().getData(), []);
  const [value, setValue] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [newAddressToggle, setNewAddressToggle] = useState(false);
  const { isLoading, addressList } = useSelector((state) => state.addresses);
  const user = useSelector((state) => state.user.user);

  const changeHandler = (value) => {
    setValue(value);
  };

  useEffect(() => {
    if (user.id) dispatch(fetchUserAddresses(user.id));
  }, [dispatch]);

  const handleClick = () => {
    setNewAddressToggle(!newAddressToggle);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(
      postUserAddress({
        addressLine,
        country: value.label,
        postalCode,
        city,
        user_id: user.id,
      })
    );

    setAddressLine("");
    setPostalCode("");
    setCity("");
    setValue("");
    setNewAddressToggle(false);
  };

  const addressLineHandler = (event) => {
    setAddressLine(event.target.value);
  };

  const postalCodeHandler = (event) => {
    setPostalCode(event.target.value);
  };
  const cityHandler = (event) => {
    setCity(event.target.value);
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
            {isLoading
              ? "Loading..."
              : addressList.map((address) => (
                  <Address key={address.id}>
                    <Country>
                      <AddressTitle>Country: </AddressTitle>
                      {address.country}
                    </Country>
                    <City>
                      <AddressTitle>City: </AddressTitle>
                      {address.city}
                    </City>
                    <AddressLine>
                      <AddressTitle>Address Line: </AddressTitle>
                      {address.addressLine}
                    </AddressLine>
                    <PostalCode>
                      <AddressTitle>Postal Code: </AddressTitle>
                      {address.postalCode}
                    </PostalCode>
                    <ButtonContainer>
                    
                      <EditButton
                        onClick={() => {
                          dispatch(deleteUserAddress(address.id));
                        }}
                      >
                        Delete
                      </EditButton>
                    </ButtonContainer>
                  </Address>
                ))}
            {addressList.length === 0 && (<NoAddress>
              You currently have no registered addresses</NoAddress>)}
            <NewAddressButton onClick={handleClick}>
              Add new address
            </NewAddressButton>
            {newAddressToggle && (
              <Fragment>
                <StyledSelect
                  options={options}
                  value={value}
                  onChange={changeHandler}
                />
                <Form onSubmit={submitHandler}>
                  <FormInput
                    name="addressLine"
                    type="text"
                    label="Address Line *"
                    value={addressLine}
                    onChange={addressLineHandler}
                    required
                  />
                  <FormInput
                    name="city"
                    type="text"
                    label="City *"
                    value={city}
                    onChange={cityHandler}
                    required
                  />
                  <FormInput
                    name="postalCode"
                    type="text"
                    label="Postal Code *"
                    value={postalCode}
                    onChange={postalCodeHandler}
                    required
                  />
                  <SaveButton type="submit">Save</SaveButton>
                </Form>
              </Fragment>
            )}
          </AddressList>
        </Right>
      </Container>
    </Fragment>
  );
};

export default Addresses;
