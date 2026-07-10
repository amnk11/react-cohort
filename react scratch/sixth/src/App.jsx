import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  console.log(`${import.meta.env.VITE_API_URL}`);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/all-chai`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("Data fetched successfully:", data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  function Card({ item }) {
    return (
      <article className="card">
        <img src={item.image} alt={item.name} />
        <div className="card-body">
          <h3>{item.name}</h3>
          <div className="category">{item.category}</div>
          <p className="desc">{item.description}</p>
          <div className="sizes">
            <div className="size">Small: ₹{item.sizes?.small}</div>
            <div className="size">Large: ₹{item.sizes?.large}</div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <main>
      <header>
        <h1>Welcome to raw react</h1>
      </header>

      <section>
        {!data ? (
          <p>Loading...</p>
        ) : Array.isArray(data) && data.length > 0 ? (
          <div className="cards">
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p>No items available.</p>
        )}
      </section>
    </main>
  );
}

export default App;
