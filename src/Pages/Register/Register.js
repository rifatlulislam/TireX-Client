import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const {
    user,
    setIsLoading,
    setUser,
    registerUser,
    updateName,
    saveUser,
    notify,
  } = useAuth();
  const history = useHistory();

  // const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // setError(false);
    setPassError(false);
    if (
      data.name === "" ||
      data.email === "" ||
      data.password === "" ||
      data.password2 === ""
    ) {
      // setError(true);
      return;
    }
    if (data.password !== data.password2) {
      setPassError(true);
      return;
    }
    console.log(data.email, data.password);

    // register user with google
    registerUser(data.email, data.password)
      .then((result) => {
        setUser({ ...user, email: data.email, displayName: data.name });
        updateName(data.name);
        saveUser(data.email, data.name);
        notify("success", "Sign UP Successfull!!");
        history.push("/");
      })
      .catch((err) => {})
      .finally(setIsLoading(false));

    console.log(data);
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
        <div className="register-container">
          <div className="form-container">
            <h3 className="register-title">Register</h3>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: "felx", flexDirection: "column" }}
            >
              <input
                {...register("name")}
                // defaultValue={user?.displayName}
                placeholder="Full Name"
                className="input-field"
              />

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
              <input
                {...register("password2")}
                type="password"
                placeholder="Re-Type Password"
                className="input-field"
              />
              <span style={{ letterSpacing: "2px", margin: "3px 0" }}>
                Already have an account?
                <Link
                  to="/login"
                  style={{ color: "lightBlue", textDecoration: "none" }}
                >
                  Login!
                </Link>
              </span>
              {passError && (
                <p style={{ color: "red", letterSpacing: "2px" }}>
                  password didn't match
                </p>
              )}
              {/* {error && (
                <p style={{ color: "red", letterSpacing: "2px" }}>
                  input fields cannot be empty
                </p>
              )} */}
              <input type="submit" value="SUBMIT" className="submit-btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
