import * as React from "react";

const Counter = () => {
  const [count, setCount] = React.useState<number>(0);
  const isLessOrEqualZero = count <= 0;

  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="mb-1 text-xl font-semibold text-gray-800">Counter</h2>
      <p className="mb-5 text-sm text-gray-500">
        A simple increment and decrement demo
      </p>

      <div className="rounded-xl border border-gray-100 bg-linear-to-b from-emerald-50/60 to-white px-5 py-8 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
          Current count
        </p>
        <p className="mt-2 text-5xl font-bold tabular-nums text-gray-800">
          {count}
        </p>
        {isLessOrEqualZero && (
          <p className="mt-3 text-xs text-gray-400">
            Decrement is disabled at zero
          </p>
        )}
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={increment}
          className="flex-1 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        >
          + Increment
        </button>

        <button
          onClick={decrement}
          disabled={isLessOrEqualZero}
          className="flex-1 rounded-lg bg-red-500 px-4 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          - Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
