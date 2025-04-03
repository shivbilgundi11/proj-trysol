import React from "react";

import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className=" mr-3 fixed left-0 top-0 z-50 max-w-10xl mb-6 flex w-full items-center justify-between rounded-2xl bg-white p-4 shadow-md">
      <img
        src={logo}
        className="h-[25px] w-[50px] cursor-pointer md:h-[30px] md:w-[80px]"
      />
      <button className="mr-4 rounded-full bg-blue-500 px-6 py-2 text-sm text-white hover:bg-blue-600">
        Login
      </button>
    </div>
  );
}

export default Navbar;
