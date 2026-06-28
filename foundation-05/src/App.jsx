import { useState } from "react";
import "./App.css";
import ManualFrom from "./ManualFrom.jsx";
import HookForm from "./HookForm.jsx";

function App() {
  const [tab, setTab] = useState("manual");

  return (
    <>
      <div>
        <div className="shell">
          <h1>Job application</h1>
        </div>
        <h1>Getting started with react</h1>
        {tab === "manual" ? <ManualFrom /> : <HookForm />}
      </div>
    </>
  );
}

export default App;
