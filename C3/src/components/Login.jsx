import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
export const Login = () => {
  const { isAuth } = useContext(Authcontext);
  let navigate = useNavigate();
  const { toggleAuth } = useContext(Authcontext);
  const [user, setuser] = useState({
    username: "",
    password: "",
  });
  const [token, setToken] = useState({});

  const handler = (e) => {
    e.preventDefault();
    //console.log(e.target.name)
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const payload = user;

    axios.post("https://reqres.in/api/login", payload).then(({ data }) => {
      setToken(data);
    });
    toggleAuth();
    navigate(-2,{replace:true});
  };

  //console.log(token);

  return (
    <form className="loginform" onSubmit={submitHandler}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={handler}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={handler}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
