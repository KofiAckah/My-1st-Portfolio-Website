import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  // { path: "/about", element: <About /> },
  // { path: "/projects", element: <Projects /> },
  // { path: "/skills", element: <Skills /> },
  // { path: "/contact", element: <Contact /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
