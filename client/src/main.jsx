import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Components/Layout";
import ErrorPage from "./pages/ErrorPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import CreatePost from "./pages/CreatePost";
import Author from "./pages/Author";
import CategoryPost from "./pages/CategoryPost";
import AuthorPost from "./pages/AuthorPost";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import EditPost from "./pages/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "post/:id", element: <PostDetails /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "author", element: <Author /> },
      { path: "create", element: <CreatePost /> },
      { path: "post/categories/:category", element: <CategoryPost /> },
      { path: "post/users/:id", element: <AuthorPost /> },
      { path: "myposts/:id", element: <Dashboard /> },
      { path: "myposts/:id/edit", element: <EditPost /> },
      { path: "logout", element: <Logout /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
