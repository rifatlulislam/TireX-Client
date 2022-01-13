import DeleteIcon from "@mui/icons-material/Delete";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import * as React from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const SingleOrder = ({ order, index, handleDelete }) => {
  const [orderStatus, setOrderStatus] = React.useState(order.status);
  const id = order._id;
  // update the status whenever admin selects
  React.useEffect(() => {
    axios
      .put("https://calm-reaches-87696.herokuapp.com/order/status", {
        orderStatus,
        id,
      })
      .then((res) => {
        // console.log(res.data);
      });
  }, [orderStatus]);

  return (
    <>
      <StyledTableRow key={order._id} style={{ fontSize: "1.5rem !important" }}>
        <StyledTableCell component="th" scope="row">
          {index + 1}
        </StyledTableCell>
        <StyledTableCell align="left" style={{ fontSize: "1.5rem !important" }}>
          <Typography varaint="body1" sx={{ fontSize: "1.2rem" }}>
            {order.name}
          </Typography>
        </StyledTableCell>
        <StyledTableCell align="left">
          <Typography varaint="body1" sx={{ fontSize: "1.1rem" }}>
            {order?.product?.name}
          </Typography>
        </StyledTableCell>
        <StyledTableCell align="left">
          {" "}
          <Typography varaint="body1" sx={{ fontSize: "1.1rem" }}>
            {order.date}
          </Typography>
        </StyledTableCell>
        <StyledTableCell align="left">
          {" "}
          <Typography
            varaint="body1"
            style={{
              color: `${order.payment === "due" ? "red" : "green"}`,
              fontSize: "1.1rem",
            }}
          >
            {order.payment}
          </Typography>
        </StyledTableCell>
        <StyledTableCell align="left">
          <FormControl>
            {/* <FormLabel
              style={{ color: "gray", fontWeight: "bold" }}
            ></FormLabel> */}
            <RadioGroup
              value={orderStatus}
              onChange={(e) => setOrderStatus(e.target.value)}
            >
              <FormControlLabel
                value="pending"
                control={<Radio color="info" />}
                label="Pending"
              ></FormControlLabel>
              <FormControlLabel
                value="shipped"
                control={<Radio color="info" />}
                label="Shipped"
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </StyledTableCell>
        <StyledTableCell align="left">
          <IconButton
            onClick={() => handleDelete(id)}
            color="error"
            aria-label="upload picture"
            component="span"
            sx={{ fontSize: "1.1rem" }}
          >
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default SingleOrder;
