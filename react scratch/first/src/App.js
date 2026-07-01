import React from "https://esm.sh/react@19.0.0";
import ReactDOM from "https://esm.sh/react-dom@19.0.0/client";


const App = () => {
  return React.createElement(
    "div",
    {
      className: "Container",
      id: "App",
    },
    [
      React.createElement("h1", null, "Hello React"),
      React.createElement("p", null, "This is a paragraph"),
      React.createElement(
        "button",
        { onClick: () => alert("Button clicked!") },
        "Click Me",
      ),
    ],
  );
};


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));