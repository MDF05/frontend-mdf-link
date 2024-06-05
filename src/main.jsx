import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import App from "./main-router/App.jsx"
import AdminLogin from "./auth-router/AuthAdmin.jsx"
import Admin from "./admin-router/Admin.jsx"

import "./main-router/css/index.css"
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/admin-login",
        element: <AdminLogin></AdminLogin>,
    },
    {
        path: "/page-admin",
        element: <Admin></Admin>,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
)
