import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user, notify } = useAuth();
  const [showLoader, setShowLoader] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const [orders, setOrders] = useState([]);
  // console.log(orders);

  useEffect(() => {
    setIsDeleted(false);
    setShowLoader(true);
    axios
      .get(`https://calm-reaches-87696.herokuapp.com/orders/${user?.email}`)
      .then((res) => {
        setShowLoader(false);
        setOrders(res.data);
      });
  }, [isDeleted]);

  const handleDelete = (id) => {
    const result = window.confirm("Are You Sure to delete this order?");
    if (result) {
      axios
        .delete(`https://calm-reaches-87696.herokuapp.com/deleteOrder/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            setIsDeleted(true);
            notify("info", "Order Deleted");
          }
        });
    }
  };

  return (
    <>
      <Container>
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
            {orders.map((order) => (
              <Grid item xs={12} md={6} key={order.product._id}>
                <div
                  className="product-card product-card-image"
                  style={{ border: "1px solid #15c7e7" }}
                >
                  <div className="product-card-img">
                    <img src={order.product.img} alt="" />
                  </div>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    {order.product.name}
                  </Typography>
                  <Box sx={{ my: 1 }}>
                    <span
                      style={{
                        fontSize: "0.9em",
                        textAlign: "left",
                      }}
                    >
                      <Rating
                        style={{ color: "#FF9529" }}
                        readonly
                        initialRating={order.product.rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                      />
                    </span>
                  </Box>
                  <Typography
                    variant="body1"
                    style={{ fontStyle: "italic", fontSize: "1.2rem" }}
                  >
                    Ordered at: {order.date}
                  </Typography>
                  <span
                    className="product-price"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {order.product.price}
                  </span>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      px: 2,
                    }}
                  >
                    <Button
                      disabled
                      variant="outlined"
                      style={{
                        color: "#fff",
                        background: `${
                          order.status === "pending"
                            ? "red"
                            : order.status === "onGoing"
                            ? "orange"
                            : "green"
                        }`,
                      }}
                    >
                      {order.status}
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleDelete(order._id)}
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </Box>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default MyOrders;
