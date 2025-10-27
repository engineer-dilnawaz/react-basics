import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";
import UserContextProvider from "./contexts/UserContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <UserContextProvider>
          <Header />
          <Outlet />
        </UserContextProvider>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About page is loading.. Please wait!!!</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense
            fallback={<h1>Contact page is loading... Please wait!!!</h1>}
          >
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
