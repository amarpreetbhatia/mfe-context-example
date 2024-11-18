import React from "react";
//@ts-ignore
import { useStore } from "store/store";

export interface HeaderProps {
  title: string;
  count: number;
  onClear: () => void;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  //@ts-ignore
  const { count, clear } = useStore();
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
      <button onClick={clear}>Clear</button>
    </header>
  );
};

export default Header;
