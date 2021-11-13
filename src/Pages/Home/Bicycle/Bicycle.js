import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Bicycle = ({ bicycle }) => {
  const { _id, name, img, description, rating, price } = bicycle;
  console.log(bicycle);
  return (
    <>
      <div className="product-card product-card-image">
        <Link to={`/bicycles/${_id}`} style={{ textDecoration: "none" }}>
          <div className="product-card-img">
            <img src={img} alt="" />
          </div>
          <h3 className="product-name">{name}</h3>
          <Typography
            varaint="body2"
            align="center"
            sx={{ color: "#bbbbbb", mb: 2 }}
          >
            {description.slice(0, 60)}...
          </Typography>
          <span className="product-price">{price}</span>
        </Link>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Link to={`/bicycles/${_id}`} style={{ textDecoration: "none" }}>
            {" "}
            <button className="btn">buy now</button>
          </Link>
        </Box>
      </div>
    </>
  );
};

export default Bicycle;
