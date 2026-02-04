import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { useCart } from "@/components/provider/cart";
import { FaShoppingCart } from "react-icons/fa";

const parsePrice = (p: string) => Number(p.replace(/[^0-9.-]+/g, ""));
const formatPrice = (n: number) => `$${n.toLocaleString()}`;

const Cart = () => {
  const { state, increment, decrement, removeItem, clear } = useCart();
  const subtotal = state.items.reduce(
    (s, i) => s + parsePrice(i.price) * i.quantity,
    0,
  );

  return (
    <div className="dark:bg-gray-900">
      <Header />
      <div className="max-w-6xl mx-auto py-24 px-4  mt-10">
        <h2 className="text-2xl font-extrabold mb-6 text-gray-900 dark:text-white ">
          Your Cart
        </h2>
        {state.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 min-h-96">
            <div className="relative mb-6">
              <style>{`
                @keyframes sadBounce {
                  0%, 100% { transform: translateY(0) rotate(-5deg); }
                  50% { transform: translateY(-20px) rotate(0deg); }
                }
                @keyframes fadeInSad {
                  from { opacity: 0; transform: scale(0.8); }
                  to { opacity: 1; transform: scale(1); }
                }
                .sad-cart-icon {
                  animation: fadeInSad 0.6s ease-out, sadBounce 3s ease-in-out infinite;
                  animation-delay: 0s, 0.6s;
                }
                .sad-text {
                  animation: fadeInSad 0.8s ease-out 0.2s both;
                }
              `}</style>
              <FaShoppingCart className="sad-cart-icon text-6xl md:text-8xl text-gray-300 dark:text-gray-700" />
            </div>
            <h3 className="sad-text text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-200 mb-2">
              Your cart is empty
            </h3>
            <p className="sad-text text-gray-500 dark:text-gray-400 mb-8">
              Looks like you haven't added anything yet!
            </p>
            <a
              href="/"
              className="sad-text px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white shadow rounded p-4 dark:bg-gray-800 dark:shadow-none">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 py-3 border-b last:border-b-0 border-gray-100 dark:border-gray-700"
                >
                  <img
                    src={`../../assets/images/${item.image}`}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <button
                        className="text-sm text-red-500 dark:text-red-400 shadow-2xl  rounded-2xl"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {item.price}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded"
                      onClick={() => decrement(item.id)}
                    >
                      -
                    </button>
                    <div className="w-8 text-center text-gray-900 dark:text-white">
                      {item.quantity}
                    </div>
                    <button
                      className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded"
                      onClick={() => increment(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white shadow rounded p-4 flex items-center justify-between dark:bg-gray-800">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Subtotal
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {formatPrice(subtotal)}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="px-4 py-2 rounded border border-gray-200 dark:border-gray-700"
                  onClick={() => clear()}
                >
                  Clear Cart
                </button>
                <button className="px-4 py-2 rounded bg-black text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
