import "./sign-in.styles.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import FormInput from "../form-input/form-input";
import Button from "../UI/Button/button";
import { useDispatch, useSelector } from "react-redux";
import {
  loginPending,
  loginSuccess,
  loginFail,
} from "../../store/Auth/loginSlice";
import { userLogin } from "../../store/Auth/login-actions";
import { getUserProfile } from "../../store/User/user-actions";
import BounceLoader from "react-spinners/BounceLoader";
import toast from "react-hot-toast";

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

  const notify = (message) => toast.error(message);

  const submitHandler = async (event) => {
    event.preventDefault();

    dispatch(loginPending());

    try {
      const isAuth = await userLogin({ email, password });

      if (isAuth.state === "error") {
        notify("Invalid login credentials.");
        return dispatch(loginFail(isAuth.message));
      }

      dispatch(loginSuccess());

      history.replace("/");
    } catch (error) {
      notify("Invalid login credentials.");
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
        {!isLoading && <Button type="submit">Sign in</Button>}
        <BounceLoader color="teal" loading={isLoading} size={30} />
      </form>
    </div>
  );
};

export default SignIn;
