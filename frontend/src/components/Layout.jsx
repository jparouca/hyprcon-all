// Layout.jsx
import React from "react";
import { Sidebar } from "./components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="lg:flex">
      <Sidebar className="relative hidden lg:flex" />
      <div className="flex flex-1">{children}</div>
    </div>
  );
}
