import "./sign-in.styles.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import FormInput from "../Form-input/form-input";
import Button from "../UI/Button/button";
import { useDispatch, useSelector } from "react-redux";
import {
  loginPending,
  loginSuccess,
  loginFail,
} from "../../store/Auth/loginSlice";
import { userLogin } from "../../store/Auth/login-actions";
import { getUserProfile } from "../../store/User/user-actions";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    dispatch(loginPending());

    try {
      const isAuth = await userLogin({ email, password });

      if (isAuth.state === "error") {
        return dispatch(loginFail(isAuth.message));
      }

      dispatch(loginSuccess());
      dispatch(getUserProfile());

      history.replace("/");
    } catch (error) {
      dispatch(loginFail(error.message));
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          required
          onChange={emailHandler}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={passwordHandler}
          required
        />
        <Button type="submit">Sign in</Button>
        {isLoading && <p>Loading...</p>}
      </form>
    </div>
  );
};

export default SignIn;
