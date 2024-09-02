import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurantByIdAsync,
  selectSelectedRestaurant,
} from "../features/restaurant/restaurantSlice";
import { useParams } from "react-router-dom";

function RestaurantDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedRestaurant = useSelector(selectSelectedRestaurant);
  console.log(selectedRestaurant);

  useEffect(() => {
    dispatch(fetchRestaurantByIdAsync(id));
  }, [dispatch, id]);

  if (!selectedRestaurant) {
    return (
      <>
        <Navbar />
        <div className="mt-10 mx-28">
          <p className="font-medium text-2xl">Loading restaurant details...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mt-10">
        <div className="mx-28">
          <img
            src={
              selectedRestaurant.mainImage ||
              "https://via.placeholder.com/600x220"
            }
            alt={selectedRestaurant.name}
            className="w-full h-[220px] object-cover rounded-lg"
          />
          <p className="mt-8 font-medium text-4xl">
            {selectedRestaurant.name} ({selectedRestaurant.location})
          </p>
          <p className="mt-1 text-lg font-light text-gray-600">
            {selectedRestaurant.foodType}
          </p>
          <p className="mt-1 text-sm font-light text-gray-600">
            {selectedRestaurant.location}
          </p>
        </div>

        <div className="mx-28 mt-12">
          <p className="font-bold text-lg mb-6">Menu Items:</p>
          <div className="">
            {selectedRestaurant.foodItems &&
            selectedRestaurant.foodItems.length > 0 ? (
              selectedRestaurant.foodItems.map((item, index) => (
                <div className="flex mb-6" key={index}>
                  <img
                    src={item.image || "https://via.placeholder.com/120x120"}
                    alt={item.name}
                    className="w-[120px] h-[120px] object-cover rounded-md"
                  />
                  <div className="ml-6">
                    <p className="font-bold text-lg">{item.name}</p>
                    <p className="mt-2 text-sm">Price: {item.price}</p>
                    <p className="mt-2 text-sm">{item.description}</p>
                  </div>
                  <div className="ml-auto">
                    <button className="bg-gray-100 text-black px-4 py-2 rounded-md">
                      Add
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No menu items available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantDetails;
