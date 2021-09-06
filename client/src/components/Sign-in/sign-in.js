import "./sign-in.styles.scss";
import { useState,useContext } from "react";
import {useHistory} from 'react-router-dom';
import FormInput from "../Form-input/form-input";
import Button from "../UI/Button/button";
import axios from "axios";
import AuthContext from '../../store/auth-context';

const SignIn = () => {
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const authCtx = useContext(AuthContext);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };


  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      console.log("hey")
      const res = await axios.post("http://localhost:8000/auth/login", {
        email: Email,
        password: Password,
      });
      console.log("hi");
      const expirationTime = new Date(new Date().getTime() + 3600000)
      authCtx.login(res.data.accessToken,expirationTime.toISOString());
      history.replace('/');
    } catch (error) {
      alert(error.message);
      console.log(error);
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
          value={Email}
          required
          onChange={emailHandler}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={Password}
          onChange={passwordHandler}
          required
        />
        <Button type="submit" >Sign in</Button>
      </form>
    </div>
  );
};

export default SignIn;
