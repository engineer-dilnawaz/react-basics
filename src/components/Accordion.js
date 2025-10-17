import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({ reviews }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const formattedDate = (date) => {
    return new Date(date)
      .toLocaleString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
        weekday: "short",
      })
      .replaceAll(",", "");
  };

  return (
    <div
      onClick={handleToggle}
      className="flex flex-col p-2 w-full mt-3 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-50 transition-colors duration-200"
    >
      <div className="flex flex-1 justify-between items-center px-2 mb-2">
        <div className="flex items-center gap-1">
          <p className="text-sm font-bold">Reviews</p>
          <p className="text-sm font-medium">
            (
            <span className="text-indigo-500 font-bold">{reviews?.length}</span>
            )
          </p>
        </div>
        <FaChevronDown
          className={`text-indigo-500 transition-transform duration-300 ease-in-out ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1">
          {reviews?.map((review, idx) => (
            <div
              key={idx}
              className={`bg-indigo-50 p-3 flex items-center gap-3 transition-all duration-300 ease-in-out ${
                isExpanded
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-2"
              }`}
              style={{
                transitionDelay: isExpanded ? `${idx * 50}ms` : "0ms",
              }}
            >
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex justify-center items-center uppercase">
                <p className="font-medium text-lg text-indigo-500">
                  {review.comment.charAt(0) + review.comment.charAt(1)}
                </p>
              </div>
              <div className="flex flex-1 justify-between">
                <p className="text-lg font-semibold">{review.comment}</p>
                <p className="text-sm font-normal text-gray-400">
                  {formattedDate(review.date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
