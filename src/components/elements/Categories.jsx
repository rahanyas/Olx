import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import categoryItems from "./list";

function Categories() {
  const [isOpen, setIsOpen] = useState(false);
  const [listItem, setListItem] = useState([]);

  const fixedCategories = [
    "cars",
    "mobile",
    "electronics",
    "motorcycle",
    "house $ Appartments",
    "scooters",
    "commercial $ other vehicles",
  ];

  const toggleIcon = () => {
    if (!isOpen) {
      setListItem(categoryItems);
    }
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    console.log(listItem);
  }, [listItem]);

  return (
    <div className="w-5/7 overflow-hidden mx-auto">
      {/* Top Fixed Categories */}
      <div className="py-2 flex items-center w-full font-bold gap-3 justify-start md:ml-[80px]">
        <div
          className="flex items-center justify-between min-w-fit cursor-pointer"
          onClick={toggleIcon}
        >
          <h4 className="uppercase font-semibold text-sm sm:ml-4 md:ml-10">
            all categories
          </h4>
          <ChevronDownIcon
            width="30"
            className={`transform transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        <div className="flex items-center gap-3 min-w-fit">
          {fixedCategories.map((category, index) => (
            <div key={index} className="my-2 min-w-fit">
              <NavLink
                to={`/${category}`}
                className="text-sm capitalize hover:text-[#91f2ed] whitespace-nowrap text-ellipsis font-normal"
              >
                {category}
              </NavLink>
            </div>
          ))}
        </div>
      </div>

{/* Dynamic List of Items */}
{isOpen && (
  <div className="w-screen px-4 py-6">
    <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {listItem.map((item, index) => (
        <li key={index} className="space-y-2">
          {/* Display Category */}
          <h4 className="font-bold text-lg text-gray-800 text-center pb-2">
            {item.category}
          </h4>

          {/* Display Items */}
          <ul className="list-none space-y-1 text-center text-gray-600">
            {item.items.map((subItem, subIndex) => (
              <li key={subIndex} className="text-sm hover:text-linkColor  cursor-pointer">
                {subItem}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
)}


    </div>
  );
}

export default Categories;
