import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import AvatarCard from "./components/AvatarCard.jsx";
import Shell from "./components/Shell.jsx";

const avatars = [
  {
    id: 1,
    name: "Nova",
    role: "Navigator",
    power: "Routing",
    initials: "NV",
  },
  {
    id: 2,
    name: "Flux",
    role: "State Keeper",
    power: "useState",
    initials: "FX",
  },
  {
    id: 3,
    name: "Memo",
    role: "Optimizer",
    power: "Memoization",
    initials: "MM",
  },
];

function App() {
  return (
    <>
      <h1>Children in react</h1>
      <Shell title="Batman">
        <h1>this is inside shell</h1>
        <p>this para is inside shell</p>
      </Shell>
      <h1>Hello from chaicode</h1>

      <section>
        {avatars.map((avatar) => (
          <AvatarCard
            key={avatar.id}
            level={avatar.id === 1 ? "captain" : undefined}
            avatar={avatar}
          />
        ))}
      </section>
    </>
  );
}

export default App;
