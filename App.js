import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello world from React!"
);

console.log(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello world from nested tags"),
    React.createElement("h2", {}, "Hello world from  h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello world from nested tags"),
    React.createElement("h2", {}, "Hello world from  h2"),
  ]),
]);

const jsxHeading = [
  <h1 className="heading" tabIndex="3">
    Hello World from JSX
  </h1>,
  <h1 className="heading" tabIndex="3">
    Hello World from JSX
  </h1>,
];

const Heading = () => {
  return jsxHeading;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
