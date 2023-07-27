
// import Footer from "./Footer";
import Categories from "./Categories/Categories";
import Header from "./Header";
import "./Home.css";
// import Chefs from "./Meals/Chefs";
import Offer from "./Offer/Offer";
import PopularItems from "./Popular/PopularItems";
// import Popular from "./Popular/Popular";

const Home = () => {
  return (
    <div>
      <Header />
      <PopularItems></PopularItems>
      
  <Offer></Offer>
  <Categories></Categories>
  {/* <Chefs></Chefs> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
