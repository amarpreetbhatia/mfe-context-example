import React from "react";

export interface HeaderProps {
  title: string;
  count: number;
  onClear: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, count, onClear }) => {
  return (
    <header
      style={{
        backgroundColor: "black",
        padding: "10px",
        color: "white",
        fontWeight: "bold",
        fontSize: "24px",
      }}
    >
      <div>{title}</div>
      <div>{count}</div>
      <button onClick={onClear}>Clear</button>
    </header>
  );
};

export default Header;
