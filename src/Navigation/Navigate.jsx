import React, { Profiler } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate as RouterNavigate,
} from "react-router-dom";
// import Portfolio from "../Portfolio";
// import Project from "../Component/Pages/Project";
import Topbar from "../Portfolio/Global/Topbar";
import Main from "../Portfolio/Component/Main";

export default function Navigate() {
  const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Portfolio />,
    // },
    // {
    //     path : '/',
    //     element :  <Project/>
    // },

    {
      path: "/",
      element: <Topbar />,
      children: [
        {
          index: true,
          path: "",
          element: <Main />,
        },
      ],
    },
    {
      path: "*",
      element: <RouterNavigate to="/" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}
