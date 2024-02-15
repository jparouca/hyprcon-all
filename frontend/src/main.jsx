import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { General } from "./routes/general";
import { Appearance } from "./routes/appearance";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/general",
    element: (
      <Root>
        <General />
      </Root>
    ),
  },
  {
    path: "/appearance",
    element: (
      <Root>
        <Appearance />
      </Root>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
