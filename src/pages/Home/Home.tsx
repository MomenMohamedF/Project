import BestSellers from "./Best-Sellers";
import FeaturedCollections from "./Featured-Collections";
import HeroSection from "./first-part";
import HotOffers from "./hot-offers";
import ShopAccessories from "./Shop-Accessories";
import SummerCollection from "./Summer-Collection";
import { api } from "../../lib/utils/api";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => api.get("/Products"),
  });
  console.log(isPending, error, data);

  return (
    <div className="dark:bg-gray-900/95">
      <HeroSection />
      <HotOffers />
      <ShopAccessories />
      <FeaturedCollections />
      <BestSellers />
      <SummerCollection />
    </div>
  );
};

export default Home;
