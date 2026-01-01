import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Portfolio from "../Portfolio";
import Project from "../Component/Pages/Project";

export default function Navigate() {
  const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Portfolio />,
    // },
    {
        path : '/',
        element :  <Project/>
    },
    {
      path : '*',
      element : <Project/>
    }
  ]);
  return <RouterProvider router={router} />;
}
