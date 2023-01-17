import Home from "../components/Home";
import NotAccess from "../components/NotAccess";
import Error from "../components/Error";

export const publicRoutes = [
  {
    path: "",
    element: <Home />,
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
