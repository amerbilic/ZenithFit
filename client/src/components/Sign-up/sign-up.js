import FormInput from "../Form-input/form-input";
import Button from "../UI/Button/button";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../store/auth-context";

import "./sign-up.styles.scss";

const SignUp = (props) => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const [emailInput, SetEmailInput] = useState("");
  const [passwordInput, SetPasswordInput] = useState("");
  const [usernameInput, SetUsernameInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  const emailHandler = (event) => {
    SetEmailInput(event.target.value);
  };

  const passwordHandler = (event) => {
    SetPasswordInput(event.target.value);
  };

  const usernameHandler = (event) => {
    SetUsernameInput(event.target.value);
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPasswordInput(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInput;
    const enteredPassword = passwordInput;
    const enteredUsername = usernameInput;
    const enteredConfirmPassword = confirmPasswordInput;

    if (enteredConfirmPassword !== enteredPassword) {
      alert("Passwords must match");
      return;
    }

    try {
      const response = await axios.post("/auth/signup", {
        email: enteredEmail,
        password: enteredPassword,
        username: enteredUsername,
        firstname: "test12",
        lastname: "test22",
      });
      const expirationTime = new Date(new Date().getTime() + 3600000);
      authCtx.login(response.data.accessToken, expirationTime.toISOString(),response.data.userId);
      alert("Succesfully created an account, you can now login with your credentials!");
      console.log(response.data);
      history.replace("/");
    } catch (error) {
      alert(error);
      console.log(error.message);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={submitHandler}>
        <FormInput
          type="text"
          name="username"
          value={usernameInput}
          onChange={usernameHandler}
          label="Username"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={emailInput}
          onChange={emailHandler}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={passwordInput}
          onChange={passwordHandler}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={confirmPasswordInput}
          onChange={confirmPasswordHandler}
          label="Confirm Password"
          required
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUp;
