import { act, fireEvent, render, screen } from "@testing-library/react";
import { expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";

import Body from "../Body";
import PRODUCT_LIST from "../mock/productList.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(PRODUCT_LIST);
    },
  });
});

it("should render the Body Component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const productCardsLength = screen.getAllByTestId("prodCard");

  expect(productCardsLength.length).toBe(194);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, {
    target: { value: "Powder" },
  });

  fireEvent.click(searchBtn);

  //   expect(searchBtn).toBeInTheDocument();

  const cards = screen.getAllByTestId("prodCard");

  expect(cards.length).toBe(2);
});

it("should render the Body Component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const productCardsLength = screen.getAllByTestId("prodCard");

  expect(productCardsLength.length).toBe(194);

  const topRatedProductsButton = screen.getByRole("button", {
    name: "Top Rated Products",
  });

  fireEvent.click(topRatedProductsButton);

  const topRatedProducts = screen.getAllByTestId("prodCard");

  expect(topRatedProducts.length).toBe(82);
});
