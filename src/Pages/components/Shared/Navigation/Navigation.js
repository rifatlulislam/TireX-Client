import { Button } from "@mui/material";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const history = useHistory();
  return (
    <div>
      <div className="navbar">
        <div className="container flex">
          <h3
            onClick={() => history.push("/")}
            className="title-name"
            style={{
              color: "#fff",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            TireX
          </h3>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/explore">Explore</Link>
              </li>

              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
          <div>
            <div className="account">
              {user?.email ? (
                <div>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      letterSpacing: "1px",
                      marginRight: "12px",
                    }}
                  >
                    {user.displayName}
                  </span>
                  <Button onClick={logOut} sx={{ color: "#15c7e7" }}>
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link className="link-item" to="/register">
                    <Button varaint="outlined" style={{ color: "#15c7e7" }}>
                      Register
                    </Button>
                  </Link>
                  <Link className="link-item" to="/login">
                    <Button varaint="contained" style={{ color: "#15c7e7" }}>
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
