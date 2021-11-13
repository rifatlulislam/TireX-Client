import React from "react";
import Footer from "../../components/Shared/Footer/Footer";
import Navigation from "../../components/Shared/Navigation/Navigation";
import AllBicycles from "../AllBicycles/AllBicycles";

const Explore = () => {
  return (
    <>
      <Navigation />
      <AllBicycles />
      <Footer />
    </>
  );
};

export default Explore;
