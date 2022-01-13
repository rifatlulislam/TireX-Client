import React from "react";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import BookOrder from "./BookOrder/BookOrder";

const Order = () => {
  return (
    <div>
      <Header />
      <BookOrder />
      <Footer />
    </div>
  );
};

export default Order;
