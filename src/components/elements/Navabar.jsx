import { NavLink } from "react-router-dom";
import { 
  ChevronDownIcon , 
  MagnifyingGlassIcon
} from "@heroicons/react/16/solid";
import Dropdown from "./DropDown";


const Navbar = () => {
  return (
    <nav className="flex items-center gap-8 bg-gray-200 justify-around">
      <img src="/olx-logo.png" alt="olx logo" width="70px" />

      {/* location search */}
      
      <div className="relative ml-4 flex items-center  box-border h-11 py-0 px-2 w-[300px]">
        <input
          type="search"
          name=""
          id=""
          placeholder='search'
          className="border-black border-2 outline-none h-10 text-sm/[16px] text-ellipsis whitespace-nowrap sm:w-full p-6 rounded-md focus:border-blue-400 md:w-full"
        />
        <ChevronDownIcon className="h-6 w-6 absolute right-2 top-1/2 transform -translate-y-1/2" />
      </div>
      

      {/* product search */}
      <div className="relative ml-4 flex items-center box-border h-11 py-0 px-0  lg:w-[700px]">
        <input
          type="search"
          name=""
          id=""
          placeholder='search'
          className="hidden lg:block flex-shrink-0 border-black border-2 outline-none h-10 text-sm/[16px] text-ellipsis whitespace-nowrap w-full p-6 leading-normal rounded-md focus:border-blue-400"
        />
        
        <MagnifyingGlassIcon className="absolute  w-12 p-3 right-0 top-1/2 transform -translate-y-1/2 bg-black text-white  md:rounded-tr-md md:rounded-br-md "/>
      </div>
      
       <Dropdown />

       <div>
        <button className="mr-3 ml-5">
           <NavLink
           to='/login'
           className="underline hover:no-underline uppercase font-semibold"
           >
            Login
           </NavLink>
        </button>
       </div>
        
    </nav>
  );
};

export default Navbar;
