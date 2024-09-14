import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ListingDetailsCard from "./components/ListingDetailsCard";
import Portfolio from "./basics/Portfolio";
import UsersPage from "./containers/UsersPage";
import User from "./components/User";

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
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/user/:id",
    element: <User />,
  },
  {
    path: "/listing/:listingId",
    element: <ListingDetailsCard />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
