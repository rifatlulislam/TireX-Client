import { Container, Grid } from "@mui/material";
import React from "react";
import cycle1 from "../../../images/alvan-nee-EHILKZNmTuA-unsplash.jpg";
import cycle2 from "../../../images/eberhard-grossgasteiger-8lDkmXnKo7s-unsplash.jpg";
import cycle3 from "../../../images/tom-austin-3L76b-LMyeI-unsplash.jpg";
import "./Categories.css";
const Categories = () => {
  return (
    <div>
      <Container sx={{ py: 9 }}>
        <div className="section">
          <div className="section-title">
            <h3
              className="second-title"
              data-aos="fade-right"
              data-aos-delay="80"
              data-aos-duration="2000"
            >
              bike category
            </h3>
            <h3
              className="main-title"
              data-aos="fade-left"
              data-aos-delay="80"
              data-aos-duration="2000"
            >
              choose your style
            </h3>
          </div>
          <div className="section-content">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <div className="category-img" data-aos="fade-up">
                  <div
                    className="category-img-inner"
                    style={{ backgroundImage: `url(${cycle1})` }}
                  ></div>
                  <div className="category-title">Urban</div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className="category-img" data-aos="fade-up">
                  <div
                    className="category-img-inner"
                    style={{ backgroundImage: `url(${cycle2})` }}
                  ></div>
                  <div className="category-title">mountain</div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className="category-img" data-aos="fade-up">
                  <div
                    className="category-img-inner"
                    style={{ backgroundImage: `url(${cycle3})` }}
                  ></div>
                  <div className="category-title">Road</div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
