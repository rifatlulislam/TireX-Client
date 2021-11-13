import { Container, Grid } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const history = useHistory();
  return (
    <footer>
      <Container sx={{ py: 5 }}>
        <div className="section-container">
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <h3
                onClick={() => history.push("/")}
                className="title-name"
                style={{
                  color: "#bbbbbb",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                TireX
              </h3>

              <p className="footer-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos molestiae vero accusamus quo maiores est ipsum
                veritatis perspiciatis dolore laudantium.
              </p>
              <div className="socials">
                <span className="social-icon">
                  <i className="fab fa-facebook"></i>
                </span>
                <span className="social-icon">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="social-icon">
                  <i className="fab fa-youtube"></i>
                </span>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="footer-menu">
                <span className="menu-item">about</span>
                <span className="menu-item">product</span>
                <span className="menu-item">services</span>
                <span className="menu-item">contact</span>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="footer-menu">
                <span className="menu-item">gallery</span>
                <span className="menu-item">gears</span>
                <span className="menu-item">faq</span>
                <span className="menu-item">contact</span>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <h3 className="footer-header">news letter</h3>
              <p className="footer-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur atque nesciunt doloribus optio laudantium excepturi
                illum fugiat tempora reiciendis assumenda.
              </p>
              <div className="subscribe-form">
                <input type="text" placeholder="Your Email..." />
                <button className="btn footer-btn">Subscribe</button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
