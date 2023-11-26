import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../pages/MyCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            {" "}
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "toy/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/toys"),
      },
    ],
  },
]);

export default router;
