import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pay = () => {
  const orderId = useParams();
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  // get order info
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://calm-reaches-87696.herokuapp.com/dashboard/payment/${orderId}`
      )
      .then((res) => {
        setLoading(false);
        setOrder(res.data);
      });
  }, [orderId]);
  return (
    <>
      {setLoading ? (
        <Box
          style={{ minHeight: "70vh" }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="inherit" sx={{ my: 5 }} />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Please pay for: {order.name}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Pay;
