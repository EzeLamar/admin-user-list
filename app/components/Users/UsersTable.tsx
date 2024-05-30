import React from "react";
import { User } from "../../page";

type Props = {
  users: User[];
  handleDeleteUser: (id: string) => void;
};

function UsersTable({ users, handleDeleteUser }: Props) {
  if (users.length === 0) {
    return (
      <div className="pt-2 text-center text-xl font-bold text-gray-600 dark:text-gray-400">
        No Users Found
      </div>
    );
  }
  return (
    <div className="border rounded-lg">
      <table className="w-full table-auto border-collapse text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-md text-gray-400 border-b bg-white dark:bg-gray-700 dark:text-gray-400 border-gray-300 dark:border-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-tl-lg">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3 rounded-tr-lg">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-3 font-semibold">{user.name}</td>
              <td className="px-6 py-3 font-semibold">{user.email}</td>
              <td className="px-6 py-3 font-semibold">{user.username}</td>
              <td className="px-6 py-3">
                <button
                  className="font-semibold bg-transparent hover:bg-gray-500 border-gray-400 dark:text-gray-400 hover:text-white py-2 px-4 border hover:border-transparent rounded"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
