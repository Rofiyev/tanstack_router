import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes/index.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
