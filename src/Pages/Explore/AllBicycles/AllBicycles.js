import { Container, Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBicycles = () => {
  const [bicycles, setBicycles] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    axios
      .get("https://calm-reaches-87696.herokuapp.com/allBicycles")
      .then((res) => {
        setShowLoader(false);
        setBicycles(res.data);
      });
  }, []);
  return (
    <div>
      <Container sx={{ py: 25 }}>
        <div className="section">
          <div className="section-title">
            <h3 className="second-title" data-aos="fade-right">
              Explore all
            </h3>
            <h3 className="main-title" data-aos="fade-left">
              choose one
            </h3>
          </div>
          {showLoader ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress color="inherit" sx={{ my: 5 }} />
            </Box>
          ) : (
            <div className="section-content" data-aos="fade-up">
              <Grid container spacing={3}>
                {bicycles.map(({ _id, img, name, price, description }) => (
                  <Grid item xs={12} md={4} key={_id}>
                    <div className="product-card product-card-image">
                      <Link
                        to={`/bicycles/${_id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="product-card-img">
                          <img src={img} alt="" />
                        </div>
                        <h3 className="product-name">{name}</h3>
                        <Typography
                          varaint="body2"
                          align="center"
                          sx={{ color: "#bbbbbb", mb: 2 }}
                        >
                          {description.slice(0, 100)}...
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
                        <Link
                          to={`/bicycles/${_id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <button className="btn">buy now</button>
                        </Link>
                      </Box>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllBicycles;
