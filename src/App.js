import { useEffect, useState } from "react";
import { getRoute } from "./Route";

function App() {
  const [allRoute, setAllRoute] = useState([]);
  useEffect(() => {
    const route = getRoute();
    console.log(route, "from app");
  }, []);

  return (
    <>
      <h2 className="text-center text-3xl font-bold text-cyan-400">
        Mahfuz Antor
      </h2>
    </>
  );
}

export default App;
