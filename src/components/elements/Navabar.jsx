import { NavLink } from "react-router-dom";
import { 
  ChevronDownIcon , 
  MagnifyingGlassIcon
} from "@heroicons/react/16/solid";
import { useState } from "react";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  function toggleIcon(){
    setIsOpen((prev) => !prev)
  }

  return (
    <nav className="flex items-center gap-8 bg-gray-100 justify-evenly overflow-hidden fixed h-[60px] w-full">
      <img src="/olx-logo-removebg-preview.png" alt="olx logo" width="70px" className="bg-transparent p-0 m-0 shadow-none"/>

      {/* location search */}
      
      <div className="relative  flex items-center  box-border h-11 py-0 px-2 w-[300px] sm:mr-4">
        <input
          type="search"
          name=""
          id=""
          placeholder='search'
          className="border-black border-2 outline-none h-10 text-sm/[16px] text-ellipsis whitespace-nowrap sm:w-full p-6 rounded-md focus:border-customTeal md:w-full"
          onClick={toggleIcon}
        />
        <ChevronDownIcon className={`h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </div>
      

      {/* product search */}
      <div className="relative flex items-center box-border h-11 py-0 px-0  lg:w-[800px]">
        <input
          type="search"
          name=""
          id=""
          placeholder='search'
          className="hidden lg:block flex-shrink-0 border-black border-2 outline-none h-10 text-sm/[16px] text-ellipsis whitespace-nowrap w-full p-6 leading-normal md:rounded-tr-md md:rounded-br-md focus:border-customTeal"
        />
        
        <MagnifyingGlassIcon className="absolute  w-12 p-3 right-0 top-1/2 transform -translate-y-1/2 bg-black text-white  md:rounded-tr-md md:rounded-br-md sm:rounded-md md:rounded-tl-none md:rounded-bl-none"/>
      </div>
       
        <button className="mr-3 ml-5">
           <NavLink
           to='/login'
           className="underline hover:no-underline uppercase font-semibold"
           >
            Login
           </NavLink>
        </button>
       
       
        <button className="mr-4 bg-blu rounded-lg border-yellow-400 border-4 h-9 w-20">
          <span>
            sell
          </span>
        </button>
      
        
    </nav>
  );
};

export default Navbar;
