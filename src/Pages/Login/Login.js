import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./login.css";

const Login = () => {
  const [error, setError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const { loginWithEmail, setIsLoading, notify } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoginError(false);
    setError(false);

    if (data.email === "" || data.password === "") {
      setError(true);
      return;
    }
    loginWithEmail(data.email, data.password)
      .then((result) => {
        notify("success", "Login Successfull!");
        setIsLoading(false);
        history.push(redirect_url);
      })
      .catch((err) => {
        setLoginError(true);
      })
      .finally(setIsLoading(false));

    reset();
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="login-container">
          <div className="form-container">
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                textAlign: "center",
                margin: "4px 0",
                letterSpacing: "1px",
              }}
            >
              Login to your account
            </h3>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "felx",
                flexDirection: "column",
              }}
            >
              <input
                {...register("email")}
                type="email"
                // defaultValue={user?.email}
                placeholder="Email Address"
                className="input-field"
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <span style={{ letterSpacing: "1px", margin: "3px 0" }}>
                Not have an account?
                <Link
                  to={{ pathname: "/register", query: { redirect_url } }}
                  style={{ color: "lightBlue", textDecoration: "none" }}
                >
                  Register!
                </Link>
              </span>
              {loginError && (
                <p style={{ color: "red", letterSpacing: "1px" }}>
                  Invalid Email or Password
                </p>
              )}
              {error && (
                <p style={{ color: "red", letterSpacing: "1px" }}>
                  input fields cannot be empty
                </p>
              )}
              <input type="submit" value="Log In" className="submit-btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
