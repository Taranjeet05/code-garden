import { useUserStore } from "../store/userStore";
import { Hatch } from "ldrs/react";
import { useEffect } from "react";

const UserDisplay = () => {
  const user = useUserStore((state) => state.user);
  const loading = useUserStore((state) => state.loading);
  const error = useUserStore((state) => state.error);
  const fetchUser = useUserStore((state) => state.fetchUser);

  useEffect(() => {
    if (user.length === 0) {
      fetchUser();
    }
  }, [fetchUser, user.length]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <Hatch size="48" stroke="4" speed="3.5" color="#2563eb" />
        <span className="mt-4 text-blue-700 font-medium animate-pulse">
          Loading users...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-red-50">
        <div className="bg-white border border-red-200 rounded-lg shadow-lg p-8 flex flex-col items-center">
          <h1 className="text-red-600 text-xl font-semibold mb-2">Error</h1>
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchUser}
            className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-2 rounded shadow"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6 flex items-center gap-2">
          <span>All User List</span>{" "}
          <span role="img" aria-label="note">
            📝
          </span>
        </h1>

        {!user || user.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="mb-4 text-gray-500">
              No users found. Click below to fetch users.
            </p>
            <button
              onClick={fetchUser}
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded shadow font-semibold"
            >
              Fetch Users
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.map((u) => (
              <div
                key={u.id}
                className="bg-gradient-to-br from-blue-100 to-white border border-blue-200 p-6 rounded-lg shadow hover:shadow-xl transition group"
              >
                <h2 className="font-bold text-lg text-blue-800 group-hover:text-blue-900 transition">
                  {u.name}
                </h2>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Email:</span> {u.email}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">City:</span> {u.address.city}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> {u.phone}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDisplay;
