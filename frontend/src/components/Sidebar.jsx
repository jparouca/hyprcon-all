// Sidebar.jsx
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button.jsx";

export const Sidebar = ({ children, title, href, isInner }) => {
  return (
    <ScrollArea
      className={`bg-purple-200 lg:flex lg:flex-col lg:border-r ${isInner ? "lg:w-80 xl:w-96" : "lg:w-60 xl:w-72"
        }`}
    >
      {title && (
        <div className="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold tracking-tight">
              {href ? <a href={href}>{title}</a> : <span>{title}</span>}
            </div>
          </div>
        </div>
      )}
      <div className="bg-zinc-50 p-3">{children}</div>
    </ScrollArea>
  );
};
