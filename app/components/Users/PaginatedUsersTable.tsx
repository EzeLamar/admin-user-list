"use client";

import { User } from "@/app/page";
import UsersTable from "./UsersTable";
import Dropdown from "../Core/Dropdown";
import { useState } from "react";

const ITEMS_PER_PAGE_OPTIONS = [3, 5, 10];
const INITIAL_ITEMS_PER_PAGE = 3;
const INITIAL_PAGE = 1;

type Props = {
  users: User[];
  page: number;
  setPage: (page: number) => void;
  handleDeleteUser: (id: string) => void;
};

function PaginatedUsersTable({
  users,
  page = INITIAL_PAGE,
  setPage,
  handleDeleteUser,
}: Props) {
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    INITIAL_ITEMS_PER_PAGE,
  );
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const usersInPage = users.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const onChangeItemsPerPage = (value: number) => {
    setItemsPerPage(value);
    setPage(INITIAL_PAGE);
  };
  return (
    <div>
      <UsersTable users={usersInPage} handleDeleteUser={handleDeleteUser} />
      <div className="flex justify-center mt-4">
        <div className="flex justify-center">
          {totalPages > 1 &&
            [...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 hover:dark:bg-gray-300 text-gray-800 dar:text-gray-300 font-bold py-1 px-4 ${page === i + 1 ? "bg-gray-400 dark:bg-gray-200" : ""}`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
        </div>
        <div className="mx-4">
          <Dropdown
            selected={itemsPerPage}
            options={ITEMS_PER_PAGE_OPTIONS}
            setSelected={onChangeItemsPerPage}
          />
        </div>
      </div>
    </div>
  );
}

export default PaginatedUsersTable;
