export const user = {
  name: "mahfuz",
  role: "seller",
};

const routes = [
  {
    path: "/dashboard/admin",
    role: "admin",
  },
  {
    path: "/dashboard/manager",
    role: "manager",
  },
  {
    path: "/dashboard/seller",
    role: "seller",
  },
  {
    path: "/dashboard/worker",
    role: "worker",
  },
];

export const getPath = () => {
  const route = routes.find((r) => r.role === user.role);
  return route.path;
};
