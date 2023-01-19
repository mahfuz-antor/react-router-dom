import { privateRoute } from "./PrivateRoute";
import Layout from "../components/Layout";
import { user } from "./Utils";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ r, children }) => {
  if (user) {
    if (r.role === user.role || r.role === "all") {
      return children;
    } else {
      return <Navigate to={"/not-access"} />;
    }
  } else {
    return <Navigate to={"/login"} replace />;
  }
};

export const getRoute = () => {
  const filterRoute = [];

  // eslint-disable-next-line array-callback-return
  privateRoute.map((r) => {
    r.element = <ProtectRoute r={r}>{r.element}</ProtectRoute>;
    filterRoute.push(r);
  });

  return {
    path: "/dashboard",
    element: <Layout />,
    children: filterRoute,
  };
};
