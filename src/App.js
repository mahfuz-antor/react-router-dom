import { useEffect, useState } from "react";
import { getRoute } from "./Route";
import Router from "./Route/Router";
import { publicRoutes } from "./Route/PublicRoute";

function App() {
  const [allRoute, setAllRoute] = useState([...publicRoutes]);
  useEffect(() => {
    const route = getRoute();
    setAllRoute([...allRoute, route]);
  }, []);
  console.log(allRoute, "from app js");

  return <Router allRoute={allRoute} />;
}

export default App;
