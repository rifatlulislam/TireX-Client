import React from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import img1 from "../../../images/531352.png";
import img3 from "../../../images/b1.png";
import img2 from "../../../images/MTBROMO_N7_2022.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero">
      <div className="slide-container" id="hero-slide">
        {/* slide item starts */}

        <Carousel itemsToShow={1} enableAutoPlay={true} pagination={false}>
          <div className="slide active">
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
          {/* another item */}
          <div className="slide active">
            <div className="slide-text">
              <div className="slide-title">
                <h3>mt bormo n7</h3>
              </div>
              <div className="slide-description">
                <p>
                  Our Team is committed to delivering your products as quickly
                  as possible, knowing you are eager to try them out. We offer a
                  variety of shipping carriers and options such as Free
                  Shipping, Flat Rate Shipping, Express Delivery and Rush
                  Processing.
                </p>
              </div>
              <div className="slide-btn">
                <Link
                  className="hero-btn"
                  to={"/bicycles/618cb22c5cbad5669d6ec52c"}
                >
                  buy now
                </Link>
              </div>
            </div>
            <div className="slide-img">
              <img src={img2} alt="" />
            </div>
          </div>
          {/* another item */}
          <div className="slide active">
            <div className="slide-text">
              <div className="slide-title">
                <h3>cascade mount</h3>
              </div>
              <div className="slide-description">
                <p>
                  We care about your items as much as you do, so to help you
                  keep peace of mind of when your package is delivered, we
                  default to having a signature required for delivery. But there
                  is always the option to not sign for delivery if you prefer.
                </p>
              </div>
              <div className="slide-btn">
                <Link
                  className="hero-btn"
                  to={"/bicycles/618cb22c5cbad5669d6ec52d"}
                >
                  buy now
                </Link>
              </div>
            </div>
            <div className="slide-img">
              <img src={img3} alt="" />
            </div>
          </div>
        </Carousel>
        <div className="hero-text">you ride</div>
      </div>
    </div>
  );
};

export default Banner;
