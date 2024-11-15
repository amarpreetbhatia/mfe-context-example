import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import "./index.css";

const App = () => (
  <div className="container">
    <Header title="Hello world" />
    <div>Name: nav-mf</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
