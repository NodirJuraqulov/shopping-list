import React from "react";
import { FaBlog } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <header className="w-full h-16 bg-white shadow-xl flex items-center justify-between px-4 z-10 fixed top-0 left-0">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#">
            <FaBlog className="text-blue-600 text-4xl" />
          </a>
          <button className="bg-blue-600 text-white px-5 py-1 rounded-2xl cursor-pointer" style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)" }}>+ New</button>
        </div>

        <div>
          <input type="text" placeholder="Search group and join..." className="border border-gray-300 rounded-md py-3 pl-4 pr-130" />
        </div>

        <div className="flex items-center gap-10">
          <a href="#">
            <FaRotate />
          </a>
          <a href="#">
            <FaRegBell />
          </a>
          <div className="flex items-center">
            <a href="#">
              <FaCog />
            </a>
            <a href="#">
              <IoMdArrowDropdown />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
