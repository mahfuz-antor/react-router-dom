import { privateRoute } from "./PrivateRoute";
import Layout from "../components/Layout";
import { user } from "./Utils";
import { Navigate } from "react-router-dom";

const protectRoute = ({ r, children }) => {
  if (user) {
    if (r.role === user.role) {
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

  privateRoute.map(
    (r) => (r.element = <protectRoute r={r}>{r.element}</protectRoute>)
  );
};
