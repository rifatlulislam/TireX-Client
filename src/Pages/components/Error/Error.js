import React from "react";

const Error = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "10rem",
            textAlign: "center",
            marginBottom: "3rem",
            color: "#fff",
          }}
        >
          404
        </h1>
        <h4
          style={{
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "1rem",
            color: "#fff",
            letterSpacing: "2px",
          }}
        >
          Page Not Found
        </h4>
        {/* <p style>Sorry, this page is not available</p> */}
      </div>
    </div>
  );
};

export default Error;
