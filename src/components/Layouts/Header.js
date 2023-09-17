import { Link } from "react-router-dom";
import Logo from "../../assets/download.png";
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
import { DropdownLoggedOut,DropdownLoggedIn } from "../index";

/* eslint-disable jsx-a11y/anchor-is-valid */


export const Header = () => {

  // dark mode start //
  const[darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
   // Search start

   const [searchSection, setSearchSection] = useState(false);

   // Search End //
 
   // Drop down //
 
   const [dropDown, setDropDown] = useState(false);
 
   // Drop down end //
   const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(()=>{
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if(darkMode){
      document.documentElement.classList.add("dark");
    } else{
      document.documentElement.classList.remove("dark");
    }
  },[darkMode])

  // dark mode end //

 

  return (
    <header>
      
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
        </Link>
        <div className="flex items-center">
           <span onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
           <span onClick={()=>setSearchSection(!searchSection)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
           <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0 </span>
              </span>                    
            </Link>
            <span onClick={()=> setDropDown(!dropDown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
            {dropDown && (token ? <DropdownLoggedIn/> : <DropdownLoggedOut/>)}
        </div>
    </div>
</nav>
{searchSection && <Search setSearchSection={setSearchSection}/>}
    </header>
  ) 
}
