import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const profile = () => {
        navigate("/")
    }

    const group1 = () => {
        navigate("/group1")
    }
    const group2 = () => {
        navigate("/group2")
    }

  return (
    <div className="w-64 h-[92vh] bg-white shadow-lg fixed top-16 left-0 flex flex-col gap-4 p-4">  
        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-md cursor-pointer hover:bg-gray-300 transition-all duration-500 hover:pl-10">
            <IoPersonSharp className="text-xl text-blue-600" />
            <button className="cursor-pointer" onClick={profile}>Profile</button>
        </div>

        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-md cursor-pointer hover:bg-gray-300 transition-all duration-500 hover:pl-10">
            <LuMessagesSquare className="text-xl text-blue-600" />
            <button>Groups</button>
            {/* <FaAngleDown className="text-2xl /> */}
        </div>

        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-md ml-5 cursor-pointer hover:bg-gray-300 transition-all duration-500 hover:pl-6">
            <IoMdAdd className="text-xl text-blue-600" />
            <button>Create Group</button>
        </div>

        <div className="flex flex-col gap-2 ml-5">
            <button onClick={group1} className="bg-gray-50 p-2 text-start rounded-md cursor-pointer hover:bg-gray-300 transition-all duration-500 hover:pl-10">Group 1</button>
            <button onClick={group2} className="bg-gray-50 p-2 text-start rounded-md cursor-pointer hover:bg-gray-300 transition-all duration-500 hover:pl-10">Group 2</button>
        </div>
    </div>
  );
};

export default React.memo(Sidebar);
