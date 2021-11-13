import React from "react";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import Banner from "../Banner/Banner";
import BestBicycle from "../BestBicycle/BestBicycle";
import Bicycles from "../Bicyles/Bicycles";
import Categories from "../Categories/Categories";
import CustomerReview from "../CustomerReview/CustomerReview";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <Bicycles />
      <BestBicycle />
      <CustomerReview />
      <Footer />
    </div>
  );
};

export default Home;
