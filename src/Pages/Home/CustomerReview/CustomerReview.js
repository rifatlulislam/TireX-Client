import { CircularProgress, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import "./CustmerReview.css";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  console.log(reviews);
  useEffect(() => {
    setShowLoader(true);
    axios
      .get("https://calm-reaches-87696.herokuapp.com/reviews")
      .then((res) => {
        setShowLoader(false);
        setReviews(res.data);
      });
  }, []);
  return (
    <div>
      <Container sx={{ py: 10 }}>
        <div className="section-title" style={{ marginBottom: "80px" }}>
          <h3 className="second-title" data-aos="fade-right">
            Customer Reviews
          </h3>
          <h3 className="main-title" data-aos="fade-left">
            Happy Customer Says
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
          <Grid container spacing={3}>
            {reviews.map(({ name, photo, description, rating }) => {
              return (
                <Grid item xs={12} md={4} key={name}>
                  <div className="review-card" data-aos="fade-up">
                    <div className="customer-feedback">
                      <p>
                        <q>{description}</q>
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <div className="review-img-div">
                        <img src={photo} alt="" className="customer-img" />
                      </div>
                      <div style={{ paddingRight: "30px" }}>
                        <p className="customer-name">{name}</p>
                        <div className="cutomer-rating">
                          <span
                            style={{
                              fontSize: "0.9em",
                              textAlign: "left",
                            }}
                          >
                            <Rating
                              style={{ color: "#FF9529" }}
                              readonly
                              initialRating={rating}
                              emptySymbol="far fa-star"
                              fullSymbol="fas fa-star"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default CustomerReview;
