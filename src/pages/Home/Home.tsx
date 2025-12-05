import BestSellers from "./Best-Sellers";
import FeaturedCollections from "./Featured-Collections";
import HeroSection from "./first-part";
import HotOffers from "./hot-offers";
import ShopAccessories from "./Shop-Accessories";
import SummerCollection from "./Summer-Collection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HotOffers />
      <ShopAccessories />
      <FeaturedCollections />
      <BestSellers />
      <SummerCollection />
    </>
  );
};

export default Home;
