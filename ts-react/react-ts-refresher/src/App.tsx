import Counter from "./components/Counter.tsx";
import ProfileCard from "./components/ProfileCard.tsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800">
            React + TypeScript Refresher
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Small demos for state, hooks, and API fetching
          </p>
        </header>

        <main className="flex w-full flex-col items-stretch justify-center gap-6 md:flex-row md:items-start">
          <Counter />
          {/* {new Array(50).fill(null).map(()=> <Counter/>)} */}
          <ProfileCard />
        </main>
      </div>
    </div>
  );
};

export default App;
