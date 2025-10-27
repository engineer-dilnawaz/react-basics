import { describe, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import RestaurantCard from "../RestaurantCard";
import withProductCard from "../withProductCard";
import ProductMock from "../mock/ProductMock.json";

const WithPromotedLabel = withProductCard(RestaurantCard);

describe("Product Card Test Cases", () => {
  it("should render product card", () => {
    render(
      <BrowserRouter>
        <RestaurantCard item={ProductMock} />
      </BrowserRouter>
    );

    const name = screen.getByText("Rolex Cellini Moonphase");

    expect(name).toBeInTheDocument();
  });

  it("should render the promoted label", () => {
    render(
      <BrowserRouter>
        <WithPromotedLabel item={ProductMock} />
      </BrowserRouter>
    );

    const label = screen.getByText("Promoted");
    expect(label).toBeInTheDocument();

    expect(screen.getByText("Rolex Cellini Moonphase")).toBeInTheDocument();
  });
});
