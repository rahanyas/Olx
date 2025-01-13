import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { NavLink } from "react-router-dom"


function Categories() {
  const items = [
    'cars',
    'mobile',
    'electronics',
    'motorcycle',
    'house $ Appartments',
    'scooters',
    'commercial $ other vehichles'
  ]
  return (
    <div className="overflow-hidden w-full flex items-center justify-center flex-nowrap mt-[2px]">
      <div className="py-2 flex items-center w-full font-bold justify-center">
      <div className="flex items-center justify-between min-w-fit cursor-pointer">
          <h4 className="uppercase font-semibold text-sm ">all categories</h4>
          <ChevronDownIcon width="30" className=""/>
      </div>
      <div className="flex items-center"
      >
        {items.map((item, index) => (
          <div 
          key={index}
          className="mx-4 my-2 min-w-fit"
          >
            <NavLink 
            to={`/${item}`}
            className="text-sm font-normal capitalize hover:text-customTeal whitespace-nowrap text-ellipsis"
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