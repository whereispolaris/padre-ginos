// add to the top
import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni",
      description: "Mozza and PEps",
    }),
    React.createElement(Pizza, {
      name: "Ameircano Pizza",
      description: "Hot dogs and french fries",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "Ham and pineapple",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "Chicky nuggies",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
