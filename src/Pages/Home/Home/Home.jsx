import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import CreatingToy from "../CreatingToy/CreatingToy";
import Gallery from "../Gallery/Gallery";
import Offer from "../Offer/Offer";
import ShopCategory from "../ShopCategory/ShopCategory";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopCategory></ShopCategory>
      <Offer></Offer>
      <CreatingToy></CreatingToy>
    </div>
  );
};

export default Home;
