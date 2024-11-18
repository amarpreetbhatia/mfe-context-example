import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore
import Header from "nav_mf/Header";
import "./index.css";
// @ts-ignore
import { StoreProvider, useStore } from "store/store";

const App = () => {
  const { count, increment, clear } = useStore();
  return (
    <div className="container">
      <Header title="Header in host" count={count} onClear={clear} />
      <div>Name: simple-host</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <div>
        <button
          style={{
            backgroundColor: "black",
            padding: "10px",
            color: "white",
            fontWeight: "bold",
            fontSize: "24px",
          }}
          onClick={increment}
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
