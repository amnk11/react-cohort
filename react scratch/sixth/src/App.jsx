import { useEffect, useState } from "react";
import "./App.css";
import ChaiMenu from "./ChaiMenu.jsx";
import { useSpecialChai } from "./hooks/useSpecialChai.js";

function App() {
  const [data, setData] = useState(null);
  const [chai, loading, error] = useSpecialChai();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main>
      <header>
        <h1>Welcome to raw react</h1>
      </header>

      {/* <ChaiMenu /> */}
      {chai ? (
        <ul>
          {chai.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        "Loading..."
      )}
    </main>
  );
}

export default App;
