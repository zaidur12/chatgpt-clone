import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "../src/Routes/Home.jsx";
import Chat from "../src/Routes/Chat.jsx";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router";
import "./index.css";
import Dashboard from "./Routes/Dashboard.jsx";
import Layout from "./Layout/Layout.jsx";
import DashLayout from "./Layout/DashLayout.jsx";



const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[{
      path:"/",
      element:<Home/>
    },
    {
      element:<DashLayout/>,
      children:[
        {
          path:"/dashboard",
          element:<Dashboard/>
        },
        {
          path:"/dashboard/chats/:id",
          element:<Dashboard/>
        }
      ]
    }]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
