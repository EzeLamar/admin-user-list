"use client";

import { useEffect, useState } from "react";
import UsersList from "./components/Users/UsersList";
import Loading from "./components/Core/Loading";

export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const json = await response.json();

        if (response.ok) {
          setUsers(json);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error: Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-24 dark:bg-gray-900">
      <h2 className="mb-4 text-2xl font-bold dark:text-gray-400">Users</h2>
      {loading ? <Loading /> : <UsersList users={users} setUsers={setUsers} />}
    </main>
  );
}
