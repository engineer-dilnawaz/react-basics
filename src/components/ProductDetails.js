import { useParams } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

import { useProductDetails } from "../utils/useProductDetails";
import Accordion from "./Accordion";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const params = useParams();
  const {
    details,
    currentThumbnail,
    isLoading,
    handleChangeThumbnail,
    quantity,
    formattedPrice,
    handleIncrement,
    handleDecrement,
    handleOnChangeText,
  } = useProductDetails(params.id);
  const [expandedItem, setExpandedItem] = useState(null);
  const cartItemsLength = useSelector((state) => state.cart.items.length);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="flex flex-col justify-center items-cente mb-12">
      {currentThumbnail ? (
        <div className="bg-gray-50 w-full flex justify-center items-center relative">
          <img
            src={currentThumbnail}
            className="max-h-80 transition-all duration-300 ease-in-out hover:scale-[1.08]"
          />

          <div className="absolute bg-slate-200 p-1 px-4 rounded-sm bottom-4 left-4 flex gap-2 items-center select-none">
            <p className=" text-2xl font-bold text-center outline-0 text-indigo-500">
              {formattedPrice}
            </p>
          </div>

          {cartItemsLength ? (
            <div className="absolute bg-slate-200 p-1 rounded-sm bottom-4 right-4 flex gap-2 items-center select-none">
              <button
                className="bg-indigo-500 text-white h-6 w-6 rounded-full p-1 cursor-pointer"
                onClick={handleDecrement}
              >
                <LuMinus />
              </button>
              <input
                min={1}
                value={quantity}
                onChange={handleOnChangeText}
                className="text-black text-2xl  font-bold w-20 text-center outline-0"
              />
              <button
                className="bg-indigo-500 text-white h-6 w-6 rounded-full p-1 cursor-pointer"
                onClick={handleIncrement}
              >
                <GoPlus />
              </button>
            </div>
          ) : (
            <button
              onClick={handleIncrement}
              className="absolute bg-slate-200 px-3 py-1 rounded-sm bottom-4 right-4 flex gap-2 items-center select-none cursor-pointer"
            >
              <p className="text-indigo-500 font-bold text-lg">Add to Cart</p>
            </button>
          )}
        </div>
      ) : null}

      <div className="flex flex-1 items-center justify-center gap-3 my-3.5 ">
        {details?.images?.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              onClick={() => handleChangeThumbnail(image)}
              className="w-32 h-32 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-300 p-6 
              transition-all duration-300 ease-in-out hover:scale-[1.08]"
            />
          );
        })}
      </div>
      <div className="w-full h-[0.5px] bg-gray-200 my-4" />
      <div className="px-4">
        <h3 className="font-bold mb-4 text-3xl text-center">
          {details?.title}
        </h3>
        <p className="font-normal text-lg text-gray-600 text-center">
          {details?.description}
        </p>
        <Accordion
          reviews={details?.reviews ?? []}
          expandedItem={expandedItem}
          onItemClick={setExpandedItem}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
