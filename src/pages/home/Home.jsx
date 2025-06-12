import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCopy } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const name = localStorage.getItem("name")
  const username = localStorage.getItem("username")

  return (
    <div className="w-full">
      <div className="flex gap-20 w-full">
        <div className="ml-64 w-full h-[92vh] p-4 bg-main bg-cover bg-center">
          <div className="w-full bg-white shadow-lg rounded-4xl p-6">
            <div className="flex items-center justify-between w-full">
                <h1 className="text-[40px] font-semibold">Your Profile</h1>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-blue-500 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-600 transition-all duration-300">
                        <FaCopy className="text-lg text-white" /> 
                        <button className="text-lg cursor-pointer text-white">Copy Username</button>    
                    </div>
                    <div className="flex items-center gap-2 bg-rose-500 px-2 py-1 rounded-md cursor-pointer hover:bg-rose-600 transition-all duration-300" onClick={logOut}>
                        <MdDelete className="text-2xl text-white" />
                        <button className="text-lg cursor-pointer text-white">Delete Account</button>    
                    </div>
                </div>    
            </div>

            <div className="flex items-center gap-8">
                <div className="w-48 h-48 rounded-full bg-rose-500 flex items-center justify-center" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
                    <h2 className="text-9xl text-white">{name.split("")[0]}</h2>
                </div>

                <div className="flex justify-between gap-5">
                    <div>
                        <h3 className="text-4xl mb-4 font-medium">{name}</h3>
                        <p className="text-lg text-gray-500">{username}</p>
                    </div>

                    <div>
                        <p className="bg-green-700 text-white px-3 py-[2px] rounded-md">Active</p>
                    </div>
                </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
