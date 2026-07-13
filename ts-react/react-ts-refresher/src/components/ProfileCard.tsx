import useRandomUser from "../hooks/use-random-user.tsx";

const ProfileCard = () => {
  const { user, fetchRandomUser, isFetching, error } = useRandomUser();

  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="mb-1 text-xl font-semibold text-gray-800">Random User</h2>
      <p className="mb-5 text-sm text-gray-500">
        Fetch a random profile from the API
      </p>

      <button
        onClick={fetchRandomUser}
        disabled={isFetching}
        className="w-full rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isFetching ? "Fetching..." : "Fetch user"}
      </button>

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {isFetching ? (
        <div className="mt-5 flex flex-col items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
          <div className="h-24 w-24 animate-pulse rounded-full bg-gray-200" />
          <div className="flex w-full flex-col items-center gap-2">
            <div className="h-5 w-36 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-48 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
            Loading user...
          </div>
        </div>
      ) : user ? (
        <div className="mt-5 overflow-hidden rounded-xl border border-gray-100 bg-linear-to-b from-blue-50/60 to-white">
          <div className="flex flex-col items-center px-5 pb-5 pt-6">
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
              className="h-24 w-24 rounded-full object-cover ring-4 ring-white shadow-md"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              {user.name.title} {user.name.first} {user.name.last}
            </p>
            <p className="text-sm capitalize text-gray-500">{user.gender}</p>
          </div>

          <div className="space-y-3 border-t border-gray-100 bg-white px-5 py-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                @
              </span>
              <span className="truncate text-gray-700">{user.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                ⌖
              </span>
              <span className="text-gray-700">
                {user.location.city}, {user.location.country}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                ☎
              </span>
              <span className="text-gray-700">{user.phone}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 rounded-xl border border-dashed border-gray-200 bg-gray-50 px-4 py-8 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xl text-gray-400">
            ?
          </div>
          <p className="text-sm font-medium text-gray-500">No user loaded yet</p>
          <p className="mt-1 text-xs text-gray-400">
            Click the button above to get started
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
