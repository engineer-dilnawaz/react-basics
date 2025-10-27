import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Header from "../Header";
import { store } from "../../store/store";
import { expect, it } from "@jest/globals";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";

const MockUserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("Dilnawaz");

  const handleLogIn = () => setIsLoggedIn(true);
  const handleLogOut = () => setIsLoggedIn(false);

  return (
    <UserContext.Provider
      value={{ loggedInUser, isLoggedIn, handleLogIn, handleLogOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

describe("Header Component Test Cases", () => {
  it("should load Header Comp with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Log In" });
    // const loginButton = screen.getByText("Log In");

    expect(loginButton).toBeInTheDocument();
  });

  it("should render cart with 0 items", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItemsCount = screen.getByText("Cart items - 0");

    expect(cartItemsCount).toBeInTheDocument();
  });

  it("should change login button to logout", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MockUserContextProvider>
            <Header />
          </MockUserContextProvider>
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Log In" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Log Out" });

    expect(logoutButton).toBeInTheDocument();
  });
});

describe("Header - Logged in username display", () => {
  const renderWithContext = (contextValue) => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <UserContext.Provider value={contextValue}>
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );
  };

  it("should not show username when not logged in", () => {
    const mockContext = {
      loggedInUser: "Dilnawaz",
      isLoggedIn: false,
      handleLogIn: jest.fn(),
      handleLogOut: jest.fn(),
    };

    renderWithContext(mockContext);

    const userName = screen.queryByText("Dilnawaz");
    expect(userName).not.toBeInTheDocument();
  });

  it("should show username when logged in", () => {
    const mockContext = {
      loggedInUser: "Dilnawaz",
      isLoggedIn: true,
      handleLogIn: jest.fn(),
      handleLogOut: jest.fn(),
    };

    renderWithContext(mockContext);

    const userName = screen.getByText("Dilnawaz");
    expect(userName).toBeInTheDocument();
  });
});
