import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left ml-4">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex uppercase justify-center w-full rounded-md  shadow-sm px-4 py-2 bg-transparent text-sm font-medium text-black  focus:outline-none"
      >
        English
        <svg
          className="ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdownButton"
        >
          <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
              malayalam
            </a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
              hindi
            </a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
              espaniol
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
