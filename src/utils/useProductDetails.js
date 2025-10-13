import { useEffect, useState } from "react";

const useProductDetails = (prodId) => {
  const [details, setDetails] = useState(null);
  const [currentThumbnail, setCurrentThumbnail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/${prodId}`);
      const data = await response.json();

      setCurrentThumbnail(data.thumbnail);
      setDetails(data);
    } catch (error) {
      console.log("Product details fetching error: ", error);
      setDetails(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeThumbnail = (url) => {
    setCurrentThumbnail(url);
  };

  return {
    details,
    currentThumbnail,
    isLoading,
    handleChangeThumbnail,
  };
};

export { useProductDetails };
