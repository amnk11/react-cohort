import React from "react";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { teas } from "../src/data.js";
import App from "../src/App.js";
import ReactDOMServer from "react-dom/server";

// GET __dirname

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define output path

const outputPath = path.join(__dirname, "../dist");

const htmlTemplatePath = path.join(__dirname, "../src/template.html");
const outputHtmlPath = path.join(outputPath, "index.html");

const template = fs.readFileSync(htmlTemplatePath,'utf-8');

const appHtml = ReactDOMServer.renderToStaticMarkup(
  React.createElement(App, { teas }),
);

const finalHtml = template.replace("<!-- app -->", appHtml);

// write output file

fs.ensureDirSync(outputPath);
fs.writeFileSync(outputHtmlPath, finalHtml, "utf-8");

console.log("Build completed. output written to dist/index.html");
