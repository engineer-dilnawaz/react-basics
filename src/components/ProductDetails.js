import { useParams } from "react-router-dom";
import { useProductDetails } from "../utils/useProductDetails";
import Accordion from "./Accordion";

const ProductDetails = () => {
  const params = useParams();
  const { details, currentThumbnail, isLoading, handleChangeThumbnail } =
    useProductDetails(params.id);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="flex flex-col justify-center items-cente mb-12">
      {currentThumbnail ? (
        <div className="bg-gray-50 w-full flex justify-center items-center">
          <img
            src={currentThumbnail}
            className="max-h-80 transition-all duration-300 ease-in-out hover:scale-[1.08]"
          />
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
        <Accordion reviews={details?.reviews ?? []} />
      </div>
    </div>
  );
};

export default ProductDetails;
