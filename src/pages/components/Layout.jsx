import React from "react";
import Saidbar from "./Saidbar";
import Headenr from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <Headenr />

      <Saidbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main
        className="pt-23 p-5 duration-300 data-w-full dark:bg-gray-700 min-h-screen dark:text-white"
        style={{
          marginLeft: isOpen ? "250px" : "80px", 
        }}
      >
        <Outlet />
      </main>
    </>
  );
}
