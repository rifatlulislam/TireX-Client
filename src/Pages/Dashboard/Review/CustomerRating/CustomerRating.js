import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import * as React from "react";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const CustomerRating = ({ value, setValue }) => {
  const [hover, setHover] = React.useState(-1);
  console.log(value);
  return (
    <Box
      sx={{
        width: 220,
        display: "flex",
        // alignItems: "center",
        padding: "20px 0",
      }}
    >
      <span style={{ marginRight: "20px" }}>RateUs:</span>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={
          <StarIcon
            style={{ opacity: 1, color: "#bbbbbb" }}
            fontSize="inherit"
          />
        }
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
};

export default CustomerRating;
