import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../images/531352.png";
import "./Showcase.css";

const Showcase = () => {
  return (
    <div>
      <div className="hero">
        <div className="slide-container">
          {/* slide item starts */}

          <div className="slide">
            <div className="slide-text">
              <div className="slide-title">
                <h3>plygon siskiu</h3>
              </div>
              <div className="slide-description">
                <p>
                  Welcome to TireX - Shop a huge selection of Road,Urban,
                  mountain and cyclocross bicycles. Huge savings on parts,
                  components and accessories! Free shipping on qualifying
                  orders.Special offer avilable on Polygon and Xtrada,grab one
                  now.
                </p>
              </div>
              <div className="slide-btn">
                <Link
                  className="hero-btn"
                  to={"/bicycles/618cb22c5cbad5669d6ec528"}
                >
                  buy now
                </Link>
              </div>
            </div>
            <div className="slide-img">
              <img src={img1} alt="" />
            </div>
          </div>

          <div className="hero-text">you ride</div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
