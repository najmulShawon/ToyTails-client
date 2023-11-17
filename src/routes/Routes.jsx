import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/AllToys/ToyDetails";

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
        path: "toy/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/addatoy",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys/addatoy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addatoy/${params.id}`),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/alltoys"),
      },
      {
        path: "/toydetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toydetails/${params.id}`),
      },
    ],
  },
]);

export default router;
