import { Link } from "react-router-dom";
import { Authcontext } from "../Context/AuthContext";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Navbar.css"
export const Navbar = () => {
  const { isAuth } = useContext(Authcontext);
  const { toggleAuth } = useContext(Authcontext);
  let navigate = useNavigate();
  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin">
        Admin
      </Link>
      {isAuth === false ? (
        <Link className="nav-login" to="/login">
          Login
        </Link>
      ) : (
        <Link className="nav-logout" to="/" onClick={()=>{
          toggleAuth()
          navigate("/")
        }}>
          Logout
        </Link>
      )}
    </div>
  );
};
