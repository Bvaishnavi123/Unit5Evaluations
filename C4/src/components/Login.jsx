import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/actions";

export const Login = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const handleLogin = (username, password) => {
    //console.log(password,username);
    let all_users,
      exist = false;
    axios.get("http://localhost:8080/users").then(({ data }) => {
      //console.log(data)
      all_users = data;
      //console.log(all_users);
      all_users.map((element) => {
        //console.log(element);
        if (element.username === username && element.pass === password) {
          if (element.role === "admin") {
            exist = true;
            navigate("/orders");
            dispatch(userLogin(true));
          }
        }
        if (exist == false) {
          navigate("/neworder");
        }
      });
    });
  };

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button
        className="submit"
        onClick={(e) => {
          e.preventDefault();
          handleLogin(username, password);
        }}
      >
        Login
      </button>
    </div>
  );
};
