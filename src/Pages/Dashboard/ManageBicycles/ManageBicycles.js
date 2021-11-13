import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
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

export default function ManageBicycles() {
  const [bicycles, setBicycles] = React.useState([]);
  //   const [showLoader, setShowLoader] = React.useState(false);
  const [isDeletd, setIsDeleted] = React.useState(false);
  const { notify } = useAuth();

  React.useEffect(() => {
    setIsDeleted(false);
    // setShowLoader(true);
    axios
      .get("https://calm-reaches-87696.herokuapp.com/allBicycles")
      .then((res) => {
        //   setShowLoader(false);
        setBicycles(res.data);
      });
  }, [isDeletd]);

  // handle cycle delete
  const handleDelete = (id) => {
    const result = window.confirm("Are you sure to delete this?");
    if (result) {
      axios
        .delete(`https://calm-reaches-87696.herokuapp.com/bicycles/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            setIsDeleted(true);
            notify("info", "Delete successfull");
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
              Cycle Name
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "1.2rem" }}>
              Price
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "1.2rem" }}>
              Ratings
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "1.2rem" }}>
              Action
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bicycles.map(({ _id, name, price, rating }, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="left">{name}</StyledTableCell>
              <StyledTableCell
                align="left"
                style={{ fontSize: "1.4rem !important" }}
              >
                {price}
              </StyledTableCell>
              <StyledTableCell align="left">{rating}</StyledTableCell>
              <StyledTableCell align="left">
                <IconButton
                  onClick={() => handleDelete(_id)}
                  color="error"
                  aria-label="upload picture"
                  component="span"
                  sx={{ fontSize: "1.4rem" }}
                >
                  <DeleteIcon></DeleteIcon>
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
