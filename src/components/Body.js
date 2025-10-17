import { useEffect, useState } from "react";

import useOnlineStatus from "../utils/useOnlineStatus";
import BodyShimmer from "./BodyShimmer";
import RestaurantCard from "./RestaurantCard";
import withProductCard from "./withProductCard";

let clonedProductList = [];

const Body = () => {
  const [productList, setProductList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);

  const isOnline = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();

      const _data = data.products.map((item, index) => ({
        ...item,
        promoted: index % 2 === 0,
      }));
      clonedProductList = [..._data];
      setProductList(_data);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const EnhancedComponent = withProductCard(RestaurantCard);

  if (!isOnline) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  if (isLoading) {
    return <BodyShimmer cardsCount={21} />;
  }

  return (
    <div>
      <div className="flex justify-between py-4 px-3 items-center">
        <div className="grow flex pr-2 items-center">
          <input
            className="w-[400px] mr-4 bg-white shadow py-2 px-2 outline-0 rounded-md text-black placeholder:text-gray-400 
            selection:text-shadow-cyan-900"
            placeholder="Filter out products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-indigo-500 px-3 py-1.5 rounded-md text-white text font-medium cursor-pointer hover:bg-indigo-600"
            onClick={() => {
              const query = searchQuery.trim().toLowerCase();

              const searchResults = clonedProductList.filter((item) =>
                item.title.toLowerCase().includes(query)
              );
              setProductList(searchResults);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex gap-3">
          <button
            disabled={productList.length === 0}
            className={`px-2 py-0.5 rounded-sm cursor-pointer font-medium transition-all ${
              activeFilter === "topRated"
                ? "bg-slate-950 text-white"
                : "bg-slate-200 text-slate-950 hover:bg-slate-950 hover:text-white"
            }`}
            onClick={() => {
              const filteredProdsList = productList.filter(
                (prod) => prod.rating > 4
              );
              setProductList(filteredProdsList);
              setActiveFilter("topRated");
            }}
          >
            Top Rated Products
          </button>

          <button
            disabled={productList.length === 0}
            className={`px-2 py-0.5 rounded-sm cursor-pointer font-medium transition-all ${
              activeFilter === "priceHighToLow"
                ? "bg-slate-950 text-white"
                : "bg-slate-200 text-slate-950 hover:bg-slate-950 hover:text-white"
            }`}
            onClick={() => {
              const sortedPriceList = [...productList].sort(
                (a, b) => b.price - a.price
              );
              setProductList(sortedPriceList);
              setActiveFilter("priceHighToLow");
            }}
          >
            Price High to Low
          </button>

          <button
            disabled={productList.length === 0}
            className={`px-2 py-0.5 rounded-sm cursor-pointer font-medium transition-all ${
              activeFilter === "priceLowToHigh"
                ? "bg-slate-950 text-white"
                : "bg-slate-200 text-slate-950 hover:bg-slate-950 hover:text-white"
            }`}
            onClick={() => {
              const sortedPriceList = [...productList].sort(
                (a, b) => a.price - b.price
              );
              setProductList(sortedPriceList);
              setActiveFilter("priceLowToHigh");
            }}
          >
            Price Low to High
          </button>

          <button
            className="bg-slate-200 px-2 py-0.5 rounded-sm text-slate-950 cursor-pointer font-medium
             hover:bg-slate-950 hover:text-white transition-all"
            onClick={() => {
              setProductList(clonedProductList);
              setSearchQuery("");
              setActiveFilter(null);
            }}
          >
            Reset Filters
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center pt-4 bg-white gap-4">
        {productList.length === 0 ? (
          <h2>No products found 😓</h2>
        ) : (
          productList.map((item) => (
            <EnhancedComponent key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
