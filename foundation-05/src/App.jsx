import { useState } from "react";
import "./App.css";
import ManualFrom from "./ManualFrom.jsx";
import HookForm from "./HookForm.jsx";

function App() {
  const [tab, setTab] = useState("manual");

  return (
    <>
      <div className="app-container">
        <div className="shell">
          <h1>Job application</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            voluptatem.
          </p>
        </div>
        <div className="tab">
          <button onClick={() => setTab("manual")}>Controlled-Manual</button>
          <button onClick={() => setTab("rhf")}>React hook form</button>
        </div>
        <h1 className="page-title">Getting started with react</h1>
        {tab === "manual" ? <ManualFrom /> : <HookForm />}
      </div>
    </>
  );
}

export default App;
