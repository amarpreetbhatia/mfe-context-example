import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore
import Header from "nav_mf/Header";
import "./index.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <Header
        title="Header in host"
        count={count}
        onClear={() => setCount(0)}
      />
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
          onClick={() => setCount(count + 1)}
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

root.render(<App />);
