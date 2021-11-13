import Footer from "../../components/Shared/Footer/Footer";
import Text from "../../Test/Text";
import Banner from "../Banner/Banner";
import BestBicycle from "../BestBicycle/BestBicycle";
import Bicycles from "../Bicyles/Bicycles";
import Categories from "../Categories/Categories";
import CustomerReview from "../CustomerReview/CustomerReview";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Text />
      <Banner />
      <Categories />
      <Bicycles />
      <BestBicycle />
      <CustomerReview />
      <Footer />
    </>
  );
};

export default Home;
