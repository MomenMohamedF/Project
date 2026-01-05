import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainShop = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "watches",
      title: "Watches",
      image: "../../../assets/images/watchs/GoldWatch1.png",
      description: "Explore our premium collection of timepieces",
    },
    {
      id: "bags",
      title: "Bags",
      image: "../../../assets/images/bags/bag1.png",
      description: "Discover stylish and functional bags",
    },
    {
      id: "rings",
      title: "Rings",
      image: "../../../assets/images/rings/ring1.png",
      description: "Elegant rings for every occasion",
    },
    {
      id: "bracelets",
      title: "Bracelets",
      image: "../../../assets/images/bracelets/brecelet1.png",
      description: "Beautiful bracelets to accessorize your look",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 dark:text-white">
          Our Collections
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          Select a category to start shopping
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/shop/${category.id}`)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 className="text-2xl font-bold mb-2 transform translate-y-0 transition-transform duration-300">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainShop;
