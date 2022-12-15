import { createBrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";
import Layout from "../layout/Layout";
import Checkout from "../views/Checkout";
import Explorer from "../views/Explorer";
import FlyingV from "../views/FlyingV";
import Home from "../views/Home";
import LesPaul from "../views/LesPaul";
import NotFound from "../views/NotFound";
import PurchaseConfirmation from "../views/PurchaseConfirmation";
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
            path: "/les-paul",
            element: <LesPaul />,
          },
          {
            path: "/flying-v",
            element: <FlyingV />,
          },
          {
            path: "/explorer",
            element: <Explorer />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/checkout",
            element: <Checkout />,
          },
          {
            path: "/purchase-confirmation",
            element: <PurchaseConfirmation />,
          },
        ],
      },
    ],
  },
]);
