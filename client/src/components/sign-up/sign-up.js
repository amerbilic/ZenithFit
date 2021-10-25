import FormInput from "../form-input/form-input";
import Button from "../UI/Button/button";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginSuccess,
  loginFail,
} from "../../store/Auth/loginSlice";
import { userRegister } from "../../store/Auth/login-actions";
import { getUserProfile } from "../../store/User/user-actions";
import toast from "react-hot-toast";
import BounceLoader from "react-spinners/BounceLoader";

import "./sign-up.styles.scss";

const SignUp = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
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
      toast.error("Passwords must match");
      return;
    }

    setIsLoading(true);
    try {
      await userRegister({
        email: enteredEmail,
        password: enteredPassword,
        username: enteredUsername,
        firstname: "test12",
        lastname: "test22",
      });

      dispatch(loginSuccess());
      dispatch(getUserProfile());
      setIsLoading(false);

      history.replace("/");
    } catch (error) {
      dispatch(loginFail(error.error.message));
      toast.error(error.error.message);
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
        {!isLoading && <Button type="submit">Sign up</Button>}
      </form>
        <BounceLoader color="teal" loading={isLoading}/>
    </div>
  );
};

export default SignUp;
