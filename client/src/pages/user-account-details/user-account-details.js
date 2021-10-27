import {
  Container,
  Left,
  Right,
  AccountDetails,
  Title,
  SaveButton,
  Form,
} from "./user-account-details.styles";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import FormInput from "../../components/form-input/form-input";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../store/User/user-actions";
import { useHistory } from "react-router-dom";

const UserAccountDetails = () => {
  const loggedInUser = useSelector((state) => state.user.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setUserId(loggedInUser.id);
    setUsername(loggedInUser.username);
    setFirstName(loggedInUser.firstname);
    setLastName(loggedInUser.lastname);
  }, [loggedInUser]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (password.length > 6 && password === confirmPassword) {
      dispatch(
        updateUser({
          id: userId,
          firstName,
          lastName,
          currentPassword,
          password,
          username,
        })
      );
    } else dispatch(updateUser({ id: userId, firstName, lastName, username }));
    history.replace("/profile");
  };

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const currentPasswordHandler = (event) => {
    setCurrentPassword(event.target.value);
  };

  const newPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Container>
      <Left>
        <ProfileNavigation />
      </Left>
      <Right>
        <AccountDetails>
          <Title>Account Details</Title>
          {loggedInUser.username ? (
            <Form onSubmit={submitHandler}>
              <FormInput
                name="Username"
                type="text"
                label="Username"
                value={username}
                readOnly
              />
              <FormInput
                name="firstName"
                type="text"
                label="First Name"
                value={firstName}
                onChange={firstNameHandler}
                required
              />
              <FormInput
                name="lastName"
                type="text"
                label="Last Name"
                value={lastName}
                onChange={lastNameHandler}
                required
              />
              <FormInput
                name="currentPassword"
                type="password"
                label="Current Password"
                value={currentPassword}
                onChange={currentPasswordHandler}
              />
              <FormInput
                name="newPassword"
                type="password"
                label="New Password"
                value={password}
                onChange={newPasswordHandler}
              />
              <FormInput
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                value={confirmPassword}
                onChange={confirmPasswordHandler}
              />
              <SaveButton type="submit">Save</SaveButton>
            </Form>
          ) : (
            <div>loading...</div>
          )}
        </AccountDetails>
      </Right>
    </Container>
  );
};

export default UserAccountDetails;
