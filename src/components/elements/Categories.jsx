import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { NavLink } from "react-router-dom"

function Categories() {

  const [isOpen, setIsOpen] = useState(false);


  const items = [
    'cars',
    'mobile',
    'electronics',
    'motorcycle',
    'house $ Appartments',
    'scooters',
    'commercial $ other vehicles'
  ]

  function toggleIcon(){
        setIsOpen((prev) => !prev)
  }
  
  return (
    <div className="w-5/7 overflow-hidden  mx-auto">
      <div className="py-2 flex items-center w-full font-bold gap-3 justify-evenly">
        <div className="flex items-center justify-between min-w-fit cursor-pointer" 
        onClick={toggleIcon}
        >
          <h4 className="uppercase font-semibold text-sm sm:ml-4 md:ml-10">all categories</h4>
          <ChevronDownIcon width="30" className={`transform transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"}`}/>
        </div>

        <div className="flex items-center gap-3 justify-start  sm:overflow-hidden">
          {items.map((item, index) => (
            <div 
              key={index}
              className="my-2 min-w-fit"
            >
              <NavLink 
                to={`/${item}`}
                className="text-sm capitalize hover:text-[#91f2ed] whitespace-nowrap text-ellipsis font-normal"
              >
                {item}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
