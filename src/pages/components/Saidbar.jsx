import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { PiGitlabLogoFill, PiStudentFill } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  // const Navigate = Navigate();

  function logout() {
    localStorage.removeItem("isLogin");
    Navigate("/");
    toast.warn("Muvaffaqiyatli chiqdingiz");
  }
  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } duration-300 fixed top-0 left-0 h-full bg-gray-300 shadow-lg dark:bg-gray-800 pt-5 flex flex-col px-5 gap-5`}
    >
      <div
        className={`font-bold text-xl bg-red-500 text-white flex items-center ${
          isOpen ? "gap-2 justify-start" : "justify-center"
        } p-3 rounded shadow-2xl`}
      >
        <PiGitlabLogoFill className="w-8 h-8" />
        {isOpen && <span>Logo</span>}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-10 -right-10 z-10 bg-white p-1 rounded shadow"
      >
        <AiOutlineMenuFold className="w-7 h-7 cursor-pointer" />
      </button>

      <ul className="flex flex-col gap-3 mt-5">
        <li>
          <NavLink
            to="/teachers"
            className={({ isActive }) =>
              `flex items-center ${
                isOpen ? "gap-3 justify-start" : "justify-center"
              } p-2 rounded shadow-2xl text-[24px] duration-300 
              ${
                isActive
                  ? "bg-blue-500  text-white "
                  : "text-black hover:bg-blue-500 dark:text-white hover:text-white"
              }`
            }
          >
            <FaChalkboardTeacher />
            {isOpen && <span className="text-base">Teachers</span>}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              `flex items-center ${
                isOpen ? "gap-3 justify-start" : "justify-center"
              } p-2 rounded shadow-2xl text-[24px] duration-300 
              ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-black hover:bg-blue-500  dark:text-white hover:text-white"
              }`
            }
          >
            <PiStudentFill />
            {isOpen && <span className="text-base">Students</span>}
          </NavLink>
        </li>
        <button onClick={logout}>
          <Link
            className="flex items-center gap-3 justify-start p-2 rounded shadow-2xl text-[18px] duration-300 text-black hover:bg-blue-500 dark:text-white hover:text-white  "
               
              
              
            to="/"
          >
            <IoExitOutline  className=" w-6 h-6"/>
            {isOpen && <span className="text-base">Log out</span>}
          </Link>
        </button>
      </ul>
    </aside>
  );
}
