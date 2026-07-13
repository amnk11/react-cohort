import { useState } from "react";

import useRandomUser from "./hooks/use-random-user.tsx";

const App = () => {
  const [count, setCount] = useState(0);
  const { user, fetchRandomUser, isFetching, error } = useRandomUser();

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
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Random User
          </h2>

          <button
            onClick={fetchRandomUser}
            disabled={isFetching}
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isFetching ? "Fetching..." : "Fetch user"}
          </button>

          {isFetching ? (
            <div className="mt-4 flex flex-col items-center gap-3 rounded-lg bg-gray-50 p-4">
              <div className="h-20 w-20 animate-pulse rounded-full bg-gray-200" />
              <div className="flex w-full flex-col items-center gap-2">
                <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-44 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-36 animate-pulse rounded bg-gray-200" />
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
                <span className="text-sm text-gray-500">Loading user...</span>
              </div>
            </div>
          ) : user ? (
            <div className="mt-4 flex flex-col items-center gap-3 rounded-lg bg-gray-50 p-4">
              <img
                src={user.picture.medium}
                alt={`${user.name.first} ${user.name.last}`}
                className="h-20 w-20 rounded-full object-cover ring-2 ring-blue-200"
              />
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">
                  {user.name.first} {user.name.last}
                </p>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-500">
                  {user.location.city}, {user.location.country}
                </p>
              </div>
            </div>
          ) : (
            <p className="mt-4 text-center text-sm text-gray-400">
              No user loaded yet
            </p>
          )}
        </div>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default App;
