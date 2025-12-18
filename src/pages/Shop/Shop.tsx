import Tap from "@/components/common/tap";
import Box from "@/components/common/box";
import Slide from "@/components/common/slide";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Pagni from "@/components/common/pagni";
import Card2 from "@/components/cards/card2";
import ErrorBoundry from "@/components/common/ErrorBoundry";

const Shop = () => {
  const { category } = useParams() as { category: string };
  const [sortBy, setSortBy] = useState("newest");

  const displayCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "Products";

  return (
    <div className="dark:bg-gray-900/95">
      <Tap pageName={displayCategory} />
      <div className="flex gap-6 px-4 md:px-8 lg:px-20 py-8 flex-col md:flex-row">
        {/* left bar */}
        <aside className="hidden md:block md:w-64 lg:w-72 shrink-0 space-y-6 ">
          <ErrorBoundry>
            <Box />
          </ErrorBoundry>

          <ErrorBoundry>
            <Slide className="w-full" />
          </ErrorBoundry>

          {/* Color Filter */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white dark:bg-gray-800 dark:text-white/56">
            <h3 className="text-lg font-bold text-black mb-4 dark:text-white/56">
              Color
            </h3>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-black cursor-pointer hover:ring-2 ring-gray-400"></div>
              <div className="w-6 h-6 rounded-full bg-yellow-600 cursor-pointer hover:ring-2 ring-gray-400"></div>
              <div className="w-6 h-6 rounded-full bg-gray-400 cursor-pointer hover:ring-2 ring-gray-400"></div>
              <div className="w-6 h-6 rounded-full bg-white border border-gray-300 cursor-pointer hover:ring-2 ring-gray-400"></div>
            </div>
          </div>
          {/* Material Filter */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white dark:bg-gray-800 dark:text-white/56">
            <h3 className="text-lg font-bold text-black mb-4 dark:text-white/56">
              Material
            </h3>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-sm text-gray-700 dark:text-white/56">
                  Gold
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-sm text-gray-700 dark:text-white/56">
                  Silver
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-sm text-gray-700 dark:text-white/56">
                  Leather
                </span>
              </label>
            </div>
          </div>
        </aside>

        {/* Right bar */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-black mb-1 dark:text-white/56">
                {displayCategory}
              </h1>
              <p className="text-gray-600 dark:text-white/56">
                {category.length} products found
              </p>
            </div>
            <div className="flex items-center gap-2 dark:bg-gray-900/95">
              <label className="text-sm text-gray-700 dark:text-white/56">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 dark:bg-gray-900/95 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="newest">Newest</option>
                <option value="price-low"> Low to High</option>
                <option value="price-high"> High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          <ErrorBoundry>
            <Card2 />
          </ErrorBoundry>

          {/* pagination */}
          <div className="mt-16 flex justify-center">
            <ErrorBoundry>
              <Pagni />
            </ErrorBoundry>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
