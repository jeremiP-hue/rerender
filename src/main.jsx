import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import StronaGlowna from "./App";
import Kontakt from "./components/Kontakt";
import Projekty from "./components/Projekty";
import UkladStrony from "./components/UkladStrony";
import Cennik from "./components/Cennik";


const routerAplikacji = createBrowserRouter([
  {
    path: "/",
    element: <UkladStrony />,
    children: [
      {
        index: true,
        element: <StronaGlowna />,
      },
      {
        path: "kontakt",
        element: <Kontakt />,
      },
      {
        path: "projekty",
        element: <Projekty />
      },
      {
        path: "cennik",
        element: < Cennik/>
      }
    ],
  },
]);

const korzenAplikacji = document.getElementById("root");

ReactDOM.createRoot(korzenAplikacji).render(
  <RouterProvider router={routerAplikacji} />,
);
