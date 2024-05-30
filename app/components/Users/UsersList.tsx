"use client";

import React from "react";
import { User } from "../../page";
import UserSearch from "./UserSearch";
import PaginatedUsersTable from "./PaginatedUsersTable";

const INITIAL_PAGE = 1;

type Props = {
  users: User[];
  setUsers: (users: User[]) => void;
};
function UsersList({ users, setUsers }: Props) {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(INITIAL_PAGE);
  const filteredUsers = users.filter(
    (users) =>
      users.name.toLowerCase().includes(search.toLowerCase()) ||
      users.email.toLowerCase().includes(search.toLowerCase()) ||
      users.username.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
    setPage(INITIAL_PAGE);
  };

  return (
    <div className="flex-col">
      <UserSearch search={search} setSearch={setSearch} />
      <PaginatedUsersTable
        users={filteredUsers}
        page={page}
        setPage={setPage}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
}

export default UsersList;
