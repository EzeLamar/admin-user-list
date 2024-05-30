"use client";

import React, { useState } from "react";

type Props = {
  selected: number;
  options: number[];
  setSelected: (option: number) => void;
};

function Dropdown({ selected, options, setSelected }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleToggleNMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSelectOption = (option: number) => {
    setSelected(option);
    setShowMenu(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-gray-500 px-3 py-2 text-sm capitalize font-semibold text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-zinc-100 hover:bg-gray-50 hover:dark:bg-gray-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => handleToggleNMenu()}
        >
          {selected}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {showMenu && (
        <div
          className="absolute right-0 z-10 mt-2 w-[3rem] origin-top-right rounded-md bg-white dark:bg-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <button
                type="button"
                key={option}
                className={`block px-4 py-2 text-sm ${selected === option ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}
                tabIndex={-1}
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
