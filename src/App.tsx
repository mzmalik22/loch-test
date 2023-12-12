import React from "react";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import { Home } from "./home";

const App = () => {
  const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
};

export default App;
