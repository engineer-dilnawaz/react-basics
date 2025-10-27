import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/slices";

const useProductDetails = (prodId) => {
  const [details, setDetails] = useState(null);
  const [currentThumbnail, setCurrentThumbnail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

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
      setTotalPrice(data?.price);
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

  const handleIncrement = () => {
    dispatch(addItem(details));
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    dispatch(removeItem(details));
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleOnChangeText = (event) => {
    const value = +event.target.value;
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const formattedPrice = useMemo(() => {
    const grandTotal = totalPrice * quantity;

    return grandTotal?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }, [totalPrice, quantity]);

  return {
    details,
    currentThumbnail,
    isLoading,
    handleChangeThumbnail,
    quantity,
    formattedPrice,
    handleIncrement,
    handleDecrement,
    handleOnChangeText,
  };
};

export { useProductDetails };
