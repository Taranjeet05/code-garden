import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../Api/Api";

const InfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1;

      if (bottom && hasNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasNextPage, fetchNextPage]);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Infinite Scroll Example</h1>
      <div className="flex flex-col gap-4">
        {data?.pages.map((page, index) => (
          <div key={index}>
            {page.map((user) => (
              <div
                key={user.id}
                className="p-4 border rounded shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={user.avatar_url}
                  alt={user.id}
                  width={50}
                  height={50}
                />
                <h2 className="text-xl font-semibold">{user.login}</h2>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
