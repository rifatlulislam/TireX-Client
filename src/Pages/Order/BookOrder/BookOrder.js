import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./BookOrder.css";

const BookOrder = () => {
  const [bicycle, setBicycle] = useState({});
  const { id } = useParams();
  const { img, name, description, rating, price } = bicycle || {};
  const { user, notify } = useAuth();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);
    axios
      .get(`https://calm-reaches-87696.herokuapp.com/bicycles/${id}`)
      .then((res) => {
        setBicycle(res.data);
        setShowLoader(false);
        console.log(res.data);
      });
  }, [id]);

  //   hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   form onSubmit
  const date = new Date();
  const onSubmit = (data) => {
    data.product = bicycle;
    data.status = "pending";
    data.payment = "due";
    data.date = date.toDateString();
    data.userEmail = user?.email;
    axios
      .post("https://calm-reaches-87696.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          notify("success", "Order Booked Successfully!");
        }
      });
    reset();
  };

  return (
    <>
      {showLoader ? (
        <Box
          style={{ minHeight: "90vh" }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="inherit" sx={{ my: 5 }} />
        </Box>
      ) : (
        <div>
          <Container sx={{ py: 10 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 3,
              }}
            >
              <div className="product-img">
                <img
                  src={img}
                  style={{ width: "100%", overflow: "hidden", mb: 2 }}
                  alt="product img"
                />
              </div>
            </Box>
            <Grid
              container
              spaceing={5}
              sx={{
                juftifyContent: "space-between",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Grid item xs={12} md={6}>
                <div className="product-info">
                  <div
                    className="product-details"
                    style={{ textAlign: "left" }}
                  >
                    <Typography variant="h4" sx={{ fontWieght: "700", my: 2 }}>
                      {name}
                    </Typography>
                  </div>
                  <Box sx={{ my: 3 }}>
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
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                    align="left"
                  >
                    {price}
                  </Typography>
                  <Typography variant="body1" align="left" my={3}>
                    {description}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={5}>
                <div className="order-form">
                  <form
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                    style={{ display: "felx", flexDirection: "column" }}
                  >
                    <input
                      {...register("name")}
                      defaultValue={user?.displayName}
                      placeholder="Full Name"
                      className="input-field"
                    />

                    <input
                      {...register("email")}
                      type="email"
                      defaultValue={user?.email}
                      placeholder="Email Address"
                      className="input-field"
                    />
                    <input
                      {...register("product")}
                      type="text"
                      defaultValue={name}
                      placeholder="Product Name"
                      className="input-field"
                    />
                    <input
                      {...register("address")}
                      type="text"
                      placeholder="Adress"
                      className="input-field"
                    />

                    <input
                      {...register("Phone")}
                      type="number"
                      placeholder="Phone"
                      className="input-field"
                    />

                    {errors.exampleRequired && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}

                    <input
                      type="submit"
                      value="Order Now"
                      className="submit-btn"
                    />
                  </form>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
};

export default BookOrder;
