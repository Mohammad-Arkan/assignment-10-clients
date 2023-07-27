import { createBrowserRouter } from "react-router-dom";
import Generator from "../components/Generator/Generator";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import Blog from "../page/Blog/Blog";
import About from "../page/About/About";
import Login from "../page/Login/Login";
import Register from "../page/Login/Register";
import PrivateRoute from "../components/Auth/PrivateRoute";
import Category from "../components/Home/Categories/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'category/:id',
        element:<Category></Category>
      },
      {
        path:"/blogs",
        element:<PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/generator",
        element: <Generator />,
      },
    ],
  },
]);

export default router;
