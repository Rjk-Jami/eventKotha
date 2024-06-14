import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Home from "../Pages/Home/Home";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "aboutUs",
          element: <AboutUs />,
        },
      ],
    },
  ]);