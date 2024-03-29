// Layout.jsx
import React from "react";
import { Sidebar } from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <div className="lg:flex">
        <Sidebar className="relative hidden sm:flex" />
        <div className="flex flex-1">{children}</div>
      </div>
    </div>
  );
}
