import { createBrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";
import Layout from "../layout/Layout";
import Checkout from "../views/Checkout";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Stratocaster from "../views/Stratocaster";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/stratocaster",
            element: <Stratocaster />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/checkout",
            element: <Checkout />,
          },
        ],
      },
    ],
  },
]);
