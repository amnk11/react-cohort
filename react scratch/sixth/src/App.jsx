import { useEffect, useState } from "react";
import "./App.css";
import ChaiMenu from "./ChaiMenu.jsx";
import { useSpecialChai } from "./hooks/useSpecialChai.js";

function App() {
  const [data, setData] = useState(null);
  console.log(`${import.meta.env.VITE_API_URL}`);
  const [chai, loading, error] = useSpecialChai();

  return (
    <main>
      <header>
        <h1>Welcome to raw react</h1>
      </header>

      <ChaiMenu />
    </main>
  );
}

export default App;
