import React, { useState } from "react";
import background from "../Assets/background.jpg";
import logo from "../Assets/Netflix_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/login", user);
    if (res.data.status === 1) {
      toast.success("Welcome");
      localStorage.setItem("myapptoken", res.data.token);
      navigate("/dashboard");
    }
    if (res.data.status === 0) {
      console.log(res.data.message)
    }
  };
  return (
    <>
      <div className="login_container">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div>
          <img
            className="background_image"
            src={background}
            alt="backgroung image"
          />
          <div className="background_color"></div>
        </div>

        <div className="card">
          <h1 className="sign_in_header">Sign In</h1>
          <form className="form">
            <input
              placeholder="Email address"
              name="email"
              className="email_login"
              type="email"
              onChange={(e) => handleChange(e)}
            />
            <input
              placeholder="Password"
              name="password"
              className="email_login"
              type="password"
              onChange={(e) => handleChange(e)}
            />
            <div className="help_feature">
              <input type="checkbox" />
              <label>Remember me</label>
              <Link to={"/forgot"}>
                <a>Forgot Password?</a>
              </Link>
            </div>
            <button className="btn_login" onClick={(e) => handleSubmit(e)}>
              Sign In
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default Login;
