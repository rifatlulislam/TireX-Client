import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Pay = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Payment Coming Soon
        </Typography>
      </Box>
    </>
  );
};

export default Pay;
