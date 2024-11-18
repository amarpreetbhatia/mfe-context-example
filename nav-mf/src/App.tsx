import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import "./index.css";
// @ts-ignore
import { CountProvider } from "simple_host/store";

const App = () => (
  <CountProvider>
    <div className="container">
      <Header title="Hello world" />
      <div>Name: nav-mf</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
    </div>
  </CountProvider>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
