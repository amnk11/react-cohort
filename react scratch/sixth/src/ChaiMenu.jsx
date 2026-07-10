import React from "react";
import { useEffect, useState } from "react";

function ChaiMenu() {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/all-chai`)
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        console.log("Data fetched successfully:", data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  return (
    <>
      <h2>Chai Menu</h2>
      <ul>
        {menu ? (
          menu.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
}

export default ChaiMenu;
