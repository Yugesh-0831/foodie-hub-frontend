import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../features/auth/authSlice";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(setLoggedInUser(null));
  };
  return (
    <>
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-1/6 bg-white shadow-lg p-6 z-40 animate-slide-in-left">
          <div className="flex items-center mb-8 justify-between">
            <p className="font-bold text-xl">My Cart</p>
            <IoMdClose
              onClick={toggleSidebar}
              className="h-8 w-8 bg-gray-100 hover:bg-gray-300 rounded-full p-2 text-black font-bold"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <IoFastFoodSharp />
              <Link
                to="/my-orders"
                className="text-lg font-medium text-gray-800 hover:text-gray-600 ml-2"
              >
                My Orders
              </Link>
            </div>
            <hr className="my-2" />
            <div className="flex items-center mt-2">
              <CgProfile />
              <Link
                to="/my-profile"
                className="text-lg font-medium text-gray-800 hover:text-gray-600 ml-2"
              >
                Profile
              </Link>
            </div>
            <hr className="my-2" />
            <div className="mt-2 text-gray-600" onClick={handleSignOut}>
              Sign Out
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
