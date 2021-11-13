import { Container, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bicycle from "../Bicycle/Bicycle";
import "./Bicycles.css";

const Bicycles = () => {
  const [bicycles, setBicycles] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    axios
      .get("https://calm-reaches-87696.herokuapp.com/bicycles")
      .then((res) => {
        setShowLoader(false);
        setBicycles(res.data);
      });
  }, []);
  return (
    <div>
      <Container sx={{ py: 10 }}>
        <div className="section">
          <div className="section-title">
            <h3 className="second-title" data-aos="fade-right">
              customer choice
            </h3>
            <h3 className="main-title" data-aos="fade-left">
              popular cycles
            </h3>
            <div className="btn-wrapper">
              <Link to="/explore" className="btn">
                view all bicycles
              </Link>
            </div>
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
                {bicycles.map((bicycle) => (
                  <Grid item xs={12} md={4} key={bicycle._id}>
                    <Bicycle bicycle={bicycle} />
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

export default Bicycles;
