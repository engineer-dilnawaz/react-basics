import { act, render } from "@testing-library/react";
import ProductDetails from "../ProductDetails";
import { jest } from "@jest/globals";

import PRODUCT_DETAILS from "../mock/productDetails.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(PRODUCT_DETAILS),
  });
});

it("should render product detail page", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <ProductDetails />
      </BrowserRouter>
    )
  );
});
