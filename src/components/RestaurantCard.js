import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const RestaurantCard = (props) => {
  const { item } = props;

  return (
    <Link
      to={`/product/${item.id}`}
      className="bg-slate-50 px-3 py-2 rounded-md "
    >
      <div className="">
        <img src={item.thumbnail} alt="food image" className="w-60 h-60" />
        <p className="font-bold text-slate-800 m-0 max-w-52">{item.title}</p>
        <p className="font-light text-slate-500 m-0 ">{item.tags.join(", ")}</p>
        <div className="w-full h-[0.5px] bg-gray-200 my-4" />
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <p className="font-bold text-sm text-indigo-500">
              {`${item.rating.toFixed(1)}`}
            </p>
            {Array.from({ length: Math.round(item.rating) }).map((_, i) => (
              <FaStar key={i} className="text-amber-500 h-3 w-3" />
            ))}
          </div>
          <p className="font-semibold text-indigo-500">${item.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
