import { useEffect, useState } from "react";
import BestSellers from "./Best-Sellers";
import FeaturedCollections from "./Featured-Collections";
import HeroSection from "./first-part";
import HotOffers from "./hot-offers";
import ShopAccessories from "./Shop-Accessories";
import SummerCollection from "./Summer-Collection";
import ErrorBoundry from "@/components/common/ErrorBoundry";
// import useProducts from "@/hooks/products/useProducts"; // Not used anymore for local data fallback
import SkeletonCard from "@/components/common/skeletonCard";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading to view skeleton
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="dark:bg-gray-900/95">
        <ErrorBoundry>
          <HeroSection />
        </ErrorBoundry>

        <ErrorBoundry>
          {isLoading ? (
            <div className="flex flex-wrap mt-8 w-[calc(100%-2rem)] h-[calc(100%-2rem)] justify-center gap-4 md:gap-6 px-0 md:px-12 lg:px-20 pb-8">
              {Array.from({ length: 3 }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))}
            </div>
          ) : (
            <HotOffers />
          )}
        </ErrorBoundry>
        <ErrorBoundry>
          <ShopAccessories />
        </ErrorBoundry>
        <ErrorBoundry>
            {isLoading ? (
             <div className="flex flex-wrap mt-8 w-[calc(100%-2rem)] h-[calc(100%-2rem)] justify-center gap-4 md:gap-6 px-0 md:px-12 lg:px-20 pb-8">
               {Array.from({ length: 3 }).map((_, idx) => (
                 <SkeletonCard key={idx} />
               ))}
             </div>
            ) : (
            <FeaturedCollections />
            )}
        </ErrorBoundry>
        <ErrorBoundry>
          {isLoading ? (
            <div className="flex flex-wrap mt-8 w-[calc(100%-2rem)] h-[calc(100%-2rem)] justify-center gap-4 md:gap-6 mt-8">
              {Array.from({ length: 3 }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))}
            </div>
          ) : (
          <BestSellers />
          )}
        </ErrorBoundry>
        <ErrorBoundry>
          <SummerCollection />
        </ErrorBoundry>
      </div>
    </>
  );
};

export default Home;
