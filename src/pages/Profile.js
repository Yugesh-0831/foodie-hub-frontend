import React from "react";
import { CiEdit } from "react-icons/ci";
import Navbar from "./Navbar";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-10">
        <div className="bg-gray-100 rounded-lg shadow-xl p-8 w-[350px] flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">My Profile</h2>

          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <button className="absolute bottom-3 right-0 bg-black text-white p-1 rounded-full">
              <CiEdit className="text-white w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 w-full">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              placeholder="Enter your name"
            />

            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              placeholder="Enter your email"
            />

            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your phone number"
            />
          </div>

          <button className="mt-10 bg-black text-white p-2 rounded-lg w-full">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
