import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import * as React from "react";
import useAuth from "../../../hooks/useAuth";
import SingleOrder from "../SingleOrder/SingleOrder";

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

export default function ManageOrders() {
  const { notify } = useAuth();
  const [allOrders, setAllOrders] = React.useState([]);
  const [isDeleted, setIsDeleted] = React.useState(false);

  React.useEffect(() => {
    setIsDeleted(false);
    axios
      .get("https://calm-reaches-87696.herokuapp.com/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      });
  }, [isDeleted]);

  const handleDelete = (id) => {
    const result = window.confirm("Are You Sure To delete this order?");
    if (result) {
      axios
        .delete(`https://calm-reaches-87696.herokuapp.com/orders/delete/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            setIsDeleted(true);
            notify("success", "Order deleted successfully");
          }
        });
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "1.2rem" }}>
              Customer Name
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "1.2rem" }}>
              Product Name
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "1.2rem" }}>
              Order Date
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "1.2rem" }}>
              Status
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "1.2rem" }}>
              Action
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {allOrders.map((order, index) => (
            <SingleOrder
              key={index}
              handleDelete={handleDelete}
              index={index}
              order={order}
            ></SingleOrder>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
