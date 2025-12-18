import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";

const Card2 = () => {
  const [activeCategory, setActiveCategory] = useState("watches");

  const WatchesProducts = [
    {
      id: 1,
      name: "Elegance Gold Watch",
      price: "$1,299",
      rating: 4.8,
      image: "watchs/GoldWatch1.png",
    },
    {
      id: 2,
      name: "Elegance Gold Watch",
      price: "$1,299",
      rating: 4.8,
      image: "watchs/GoldWatch2.png",
    },
    {
      id: 3,
      name: "Modern Silver Classic",
      price: "$899",
      rating: 4.7,
      image: "watchs/SilverWatch1.png",
    },
    {
      id: 4,
      name: "Modern Silver Classic",
      price: "$899",
      rating: 4.7,
      image: "watchs/SilverWatch2.png",
    },
    {
      id: 5,
      name: "Heritage Black Gold",
      price: "$1,599",
      rating: 4.6,
      image: "watchs/blackGold1.png",
    },
    {
      id: 6,
      name: "Heritage Black Gold",
      price: "$1,599",
      rating: 4.6,
      image: "watchs/blackGold2.png",
    },
    {
      id: 7,
      name: "Midnight Legacy Watch",
      price: "$2,199",
      rating: 4.5,
      image: "watchs/legacyWatch.png",
    },
    {
      id: 8,
      name: "Vintage Bronze Classic",
      price: "$799",
      rating: 4.4,
      image: "watchs/BronzeClassic.png",
    },
    {
      id: 9,
      name: "Ceramic Pure Gold",
      price: "$1,799",
      rating: 4.3,
      image: "watchs/whiteWatch.png",
    },
  ];
  const BagsProducts = [
    {
      id: 1,
      name: "Classic Leather Tote",
      price: "$420",
      rating: 4.9,
      image: "bags/bag1.png",
    },
    {
      id: 2,
      name: "Classic Leather Tote",
      price: "$420",
      rating: 4.9,
      image: "bags/bagg1.png",
    },
    {
      id: 3,
      name: "Crossbody Essential",
      price: "$280",
      rating: 4.8,
      image: "bags/bagg2.png",
    },
    {
      id: 4,
      name: "Crossbody Essential",
      price: "$280",
      rating: 4.8,
      image: "bags/bag2.png",
    },
    {
      id: 5,
      name: "Evening Clutch",
      price: "$199",
      rating: 4.7,
      image: "bags/bag3.png",
    },
    {
      id: 6,
      name: "Evening Clutch",
      price: "$199",
      rating: 4.7,
      image: "bags/bagg3.png",
    },
    {
      id: 7,
      name: "Structured Satchel",
      price: "$520",
      rating: 4.7,
      image: "bags/bag4.png",
    },
    {
      id: 8,
      name: "Structured Satchel",
      price: "$520",
      rating: 4.7,
      image: "bags/bagg4.png",
    },
    {
      id: 9,
      name: "Chain Mini Bag",
      price: "$340",
      rating: 4.8,
      image: "bags/bag5.png",
    },
    {
      id: 10,
      name: "Chain Mini Bag",
      price: "$340",
      rating: 4.8,
      image: "bags/bagg5.png",
    },
    {
      id: 11,
      name: "Bucket Bag",
      price: "$380",
      rating: 4.9,
      image: "bags/bag6.png",
    },
    {
      id: 12,
      name: "Bucket Bag",
      price: "$380",
      rating: 4.9,
      image: "bags/bagg6.png",
    },
  ];
  const RingsProducts = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: "$1,299",
      rating: 4.8,
      image: "rings/ring1.png",
    },
    {
      id: 2,
      name: "Minimalist Gold Band",
      price: "$399",
      rating: 4.7,
      image: "rings/ring2.png",
    },
    {
      id: 3,
      name: "Emerald Statement Ring",
      price: "$1,899",
      rating: 4.9,
      image: "rings/ring3.png",
    },
    {
      id: 4,
      name: "Silver Stackable Set",
      price: "$599",
      rating: 4.8,
      image: "rings/ring4.png",
    },
  ];
  const BraceletsProducts = [
    {
      id: 1,
      name: "Golden Chain Bracelet",
      price: "$185",
      rating: 4.8,
      image: "bracelets/brecelet1.png",
    },
    {
      id: 2,
      name: "Leather Band Bracelet",
      price: "$95",
      rating: 4.7,
      image: "bracelets/brecelet2.png",
    },
    {
      id: 3,
      name: "Natural Stone Beads",
      price: "$125",
      rating: 4.6,
      image: "bracelets/brecelet3.png",
    },
    {
      id: 4,
      name: "Silver Cuff Bracelet",
      price: "$165",
      rating: 4.8,
      image: "bracelets/brecelet4.png",
    },
    {
      id: 5,
      name: "Delicate Charm Bracelet",
      price: "$215",
      rating: 4.8,
      image: "bracelets/brecelet5.png",
    },
    {
      id: 6,
      name: "Black Leather Band",
      price: "$110",
      rating: 4.7,
      image: "bracelets/brecelet6.png",
    },
    {
      id: 7,
      name: "Rose Gold Diamond",
      price: "$385",
      rating: 4.8,
      image: "bracelets/brecelet7.png",
    },
    {
      id: 8,
      name: "Crystal Tennis Bracelet",
      price: "$295",
      rating: 4.9,
      image: "bracelets/brecelet8.png",
    },
  ];
  const productsToDisplay = () => {
    switch (activeCategory) {
      case "watches":
        return WatchesProducts;
      case "bags":
        return BagsProducts;
      case "rings":
        return RingsProducts;
      case "bracelets":
        return BraceletsProducts;
      default:
        return WatchesProducts;
    }
  };

  return (
    <div>
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveCategory("watches")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            activeCategory === "watches"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Watches
        </button>
        <button
          onClick={() => setActiveCategory("bags")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            activeCategory === "bags"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Bags
        </button>
        <button
          onClick={() => setActiveCategory("rings")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            activeCategory === "rings"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Rings
        </button>
        <button
          onClick={() => setActiveCategory("bracelets")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            activeCategory === "bracelets"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Bracelets
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {productsToDisplay().map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow dark:bg-gray-800 "
          >
            <div className="relative bg-gray-100 h-48 overflow-hidden">
              <img
                src={`../../../assets/images/${product.image}`}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 dark:brightness-90 dark:hover:brightness-100 "
              />
              <button className="absolute top-3  right-3 bg-white rounded-full p-2 shadow hover:shadow-lg transition-shadow dark:bg-gray-700">
                <CiHeart />
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-semibold text-black mb-1 dark:text-white/56">
                  {product.name}
                </h3>
                <span className="text-lg font-bold text-green-600">
                  {product.price}
                </span>
              </div>
              <div className="flex items-center mb-3 text-GrayPrimary gap-2 flex-row">
                <span className="text-xl text-DYprimary  flex items-center gap-1 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span>({product.rating})</span>
              </div>
              <button className="w-full bg-black text-white py-2 rounded-2xl font-semibold hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
