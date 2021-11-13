import React from "react";
import { Link } from "react-router-dom";
import cicyle from "../../../images/6489548.png";
import "./BestBicyle.css";

const BestBicycle = () => {
  return (
    <div>
      <div className="special-section">
        <div className="section-title" data-aos="fade-left">
          <h3 className="second-title">best seller</h3>
          <h3 className="main-title">xtrada hardtail</h3>
          <div className="special-price">$2,099.00</div>
          <Link className="btn" to={"/bicycles/618cb22c5cbad5669d6ec529"}>
            buy now
          </Link>
        </div>
        <div className="special-img" data-aos="fade-right">
          <img src={cicyle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BestBicycle;
