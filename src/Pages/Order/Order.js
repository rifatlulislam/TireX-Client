import React from "react";
import Footer from "../components/Shared/Footer/Footer";
import Navigation from "../components/Shared/Navigation/Navigation";
import BookOrder from "./BookOrder/BookOrder";

const Order = () => {
  return (
    <div>
      <Navigation />
      <BookOrder />
      <Footer />
    </div>
  );
};

export default Order;
