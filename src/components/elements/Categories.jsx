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
    <div className="w-full flex items-center justify-center flex-nowrap mt-[2px]">
      <div className="p-2  flex items-center max-w-fit font-bold ">
      <div className="relative w-[150px] cursor-pointer">
          <h4 className="uppercase font-semibold text-sm ">all categories</h4>
          <ChevronDownIcon width="40" className="absolute right-0 bottom-0 translate-y-2.5 translate-x-2 "/>
      </div>
      <div className="flex items-center ml-2"
      style={{width:'calc(100% - 152px)'}}>
        {items.map((item, index) => (
          <div 
          key={index}
          className="mx-4 my-2 min-w-[32px]  text-ellipsis whitespace-nowrap"
          >
            <NavLink 
            to={`/${item}`}
            className="text-sm font-normal capitalize hover:text-customTeal"
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