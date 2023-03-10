import AdminPage from "../components/AdminPage";
import Manager from "../components/Manager";
import Seller from "../components/Seller";
import Worker from "../components/Worker";
import Payment from "../components/Payment";
import { Navigate } from "react-router-dom";
import { getPath } from "./Utils";

export const privateRoute = [
  {
    path: "/dashboard",
    element: <Navigate replace to={getPath()} />,
    role: "all",
  },
  {
    path: "manager",
    element: <Manager />,
    role: "manager",
  },
  {
    path: "admin",
    element: <AdminPage />,
    role: "admin",
  },
  {
    path: "seller",
    element: <Seller />,
    role: "seller",
  },
  {
    path: "worker",
    element: <Worker />,
    role: "worker",
  },
  {
    path: "payment",
    element: <Payment />,
    role: "admin",
  },
];
