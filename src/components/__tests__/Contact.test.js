import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Contact from "../Contact";

describe("Contact Us Page Test Cases", () => {
  test("should load heading inside Contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load button inside Contact us component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("should load input box by placeholder inside Contact us component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const inputBox = screen.getByPlaceholderText("Email");

    expect(inputBox).toBeInTheDocument();
  });

  it("should render input boxes inside the Contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(3);
  });
});
