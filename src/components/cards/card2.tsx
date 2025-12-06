import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const Card2 = () => {
  const products = [
    {
      id: 1,
      name: "Elegance Gold Watch",
      price: "$1,299",
      rating: 4.8,
      image: "Sellers1.png",
    },
    {
      id: 2,
      name: "Modern Silver Classic",
      price: "$899",
      rating: 4.7,
      image: "Sellers2.png",
    },
    {
      id: 3,
      name: "Heritage Black Gold",
      price: "$1,599",
      rating: 4.6,
      image: "Sellers3.png",
    },
    {
      id: 4,
      name: "Midnight Legacy Watch",
      price: "$2,199",
      rating: 4.5,
      image: "Sellers4.png",
    },
    {
      id: 5,
      name: "Vintage Bronze Classic",
      price: "$799",
      rating: 4.4,
      image: "Sellers1.png",
    },
    {
      id: 6,
      name: "Ceramic Pure Gold",
      price: "$1,799",
      rating: 4.3,
      image: "Sellers2.png",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {products.map((product) => (
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
  );
};

export default Card2;
