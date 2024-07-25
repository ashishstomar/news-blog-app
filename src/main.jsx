import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trending from "./components/Trending.jsx";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import BlogPostDetails from "./components/BlogPostDetails.jsx";
import Sports from "./components/Sports.jsx";
import Technology from "./components/Technology.jsx";
import Finance from "./components/Finance.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/sports",
        element: <Sports />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
      {
        path: "/finance",
        element: <Finance />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/article/:category/:url",
        element: <BlogPostDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
