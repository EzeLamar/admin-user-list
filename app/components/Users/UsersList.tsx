import React from "react";
import { User } from "../../page";
import UsersTable from "./UsersTable";
import UserSearch from "./UserSearch";

type Props = {
  users: User[];
  setUsers: (users: User[]) => void;
};
function UsersList({ users, setUsers }: Props) {
  const [search, setSearch] = React.useState("");

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="flex-col">
      <UserSearch search={search} setSearch={setSearch} />
      <UsersTable
        users={users}
        search={search}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
}

export default UsersList;
