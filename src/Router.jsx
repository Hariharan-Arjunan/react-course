import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ListingDetailsCard from "./components/ListingDetailsCard";
import Portfolio from "./basics/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/listing/:listingId",
    element: <ListingDetailsCard />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
