import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const isLessOrEqualZero = count <= 0;

  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Counter</h1>
        <p className="text-lg text-gray-700 mb-6">
          Count is: <span className="font-bold">{count}</span>
        </p>

        <div className="flex gap-3">
          <button
            onClick={increment}
            className="flex-1 py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md shadow"
          >
            Increment
          </button>

          <button
            onClick={decrement}
            className="flex-1 py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md shadow disabled:opacity-50"
            disabled={isLessOrEqualZero}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
