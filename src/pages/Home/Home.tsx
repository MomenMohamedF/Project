import BestSellers from "./Best-Sellers";
import FeaturedCollections from "./Featured-Collections";
import HeroSection from "./first-part";
import HotOffers from "./hot-offers";
import ShopAccessories from "./Shop-Accessories";
import SummerCollection from "./Summer-Collection";
import ErrorBoundry from "@/components/common/ErrorBoundry";
// import useProducts from "@/hooks/products/useProducts";

const Home = () => {
  // const { data, isPending, error } = useProducts();

  return (
    <>
      {/* {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data &&
        data?.data.products.map((product: product) => (
          <div key={product.id}>{product.title}</div>
        ))} */}
      <div className="dark:bg-gray-900/95">
        <ErrorBoundry>
          <HeroSection />
        </ErrorBoundry>
        <ErrorBoundry>
          <HotOffers />
        </ErrorBoundry>
        <ErrorBoundry>
          <ShopAccessories />
        </ErrorBoundry>
        <ErrorBoundry>
          <FeaturedCollections />
        </ErrorBoundry>
        <ErrorBoundry>
          <BestSellers />
        </ErrorBoundry>
        <ErrorBoundry>
          <SummerCollection />
        </ErrorBoundry>
      </div>
    </>
  );
};

export default Home;
