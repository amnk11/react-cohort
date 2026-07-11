import React from "react";
import { teas } from "./data.js";

export default function App() {
  return React.createElement(
    "div",
    { style: { color: "wheat", backgroundColor: "black", padding: "1rem" } },
    [
      React.createElement("h1", { key: "h1" }, "Hello world"),
      React.createElement(
        "p",
        { key: "p" },
        "This is a simple React app without JSX",
      ),
      React.createElement(
        "ul",
        { key: "ul" },
        teas.map((tea) =>
          React.createElement(
            "li",
            { key: tea.id },
            `${tea.name}: ${tea.description}`,
          ),
        ),
      ),
    ],
  );
}
