import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";

const Group1 = () => {
  const name = localStorage.getItem("name");
  const username = localStorage.getItem("username");

  return (
    <div className="w-full">
      <div className="flex gap-20 w-full">
        <div className="ml-64 w-full h-[92vh] p-4 bg-main bg-cover bg-center">
          <div className="flex items-center justify-between">
            <h4 className="text-4xl font-medium text-white">Group 1</h4>

            <div className="flex items-center justify-center gap-5">
              <p className="bg-white p-2 rounded-md">
                Owner:{" "}
                <span className="bg-blue-600 text-white text-md px-2 rounded-md">
                  {name.split("")[0]}
                </span>{" "}
                {name} (<span className="text-gray-600">{username}</span>)
              </p>
              <button className="flex items-center justify-center bg-white p-3 rounded-md">
                <a href="#">
                  <HiDotsHorizontal />
                </a>
                <a href="#">
                  <IoMdArrowDropdown />
                </a>
              </button>
            </div>
          </div>

          <div className="flex items-start gap-12 mt-5">
            <div className="bg-white rounded-md p-4 w-full min-h-[80vh]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="text-2xl font-semibold">Items</h4>
                  <span className="bg-blue-600 text-white text-md font-bold px-3 py-1 rounded-md">
                    0
                  </span>
                </div>

                <div>
                  <form
                    action=""
                    className="flex items-center justify-center gap-4"
                  >
                    <input
                      type="text"
                      placeholder="Title"
                      className="border border-gray-300 px-3 py-[5px] rounded-md"
                    />
                    <button className="bg-blue-600 text-white text-xl font-bold px-3 py-1 rounded-md">
                      +
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md p-4 w-full min-h-[80vh]">
              <div className="flex items-center gap-2 mb-4">
                <h4 className="text-2xl font-semibold">Members</h4>
                <span className="bg-blue-600 text-white text-md font-bold px-3 py-1 rounded-md">
                  1
                </span>
              </div>

              <div className="w-full">
                <div className="w-full border border-gray-300 px-4 py-1 rounded-md flex items-center gap-4">
                  <span className="bg-blue-600 text-white text-xl px-4 py-[6px] rounded-md">
                    {name.split("")[0]}
                  </span>

                  <div>
                    <h4 className="bg-white rounded-md text-lg">{name}</h4>
                    <p className="text-gray-600 text-lg">{username}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Group1);
