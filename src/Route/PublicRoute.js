import Home from "../components/Home";
import NotAccess from "../components/NotAccess";
import Error from "../components/Error";
import AddProduct from "../components/AddProduct";

export const publicRoutes = [
  {
    path: "",
    element: <Home />,
    children: [
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
    ],
  },

  {
    path: "/not-access",
    element: <NotAccess />,
  },
  {
    path: "*",
    element: <Error />,
  },
];
