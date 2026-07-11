import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./src/App.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello world");
});

app.get("/chaicode", (req, res) => {
  const appHtml = ReactDOMServer.renderToString(React.createElement(App));

  res.setHeader("content-type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>React SSR Example</title>
    </head>
    <body>
        <div id="root">${appHtml}</div>
    </body>
    </html>
    `);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
