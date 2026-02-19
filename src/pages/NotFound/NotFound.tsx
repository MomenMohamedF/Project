import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaTriangleExclamation } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <FaTriangleExclamation className="text-6xl md:text-8xl text-Yprimary animate-bounce" />
        </div>
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-black bg-Yprimary rounded-full shadow-lg hover:bg-yellow-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <FaHome />
          <span>Go Back Home</span>
        </Link>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 dark:bg-yellow-900 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 dark:bg-yellow-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>
    </div>
  );
};

export default NotFound;
