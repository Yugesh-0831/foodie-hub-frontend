import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllRestaurantsAsync,
  selectAllRestaurants,
} from "../features/restaurant/restaurantSlice";

function Restaurants() {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectAllRestaurants);

  useEffect(() => {
    dispatch(fetchAllRestaurantsAsync());
  }, [dispatch]);
  console.log("restaurants", restaurants);

  return (
    <>
      <Navbar />
      <div className="mx-28">
        <p className="text-3xl mt-5 font-medium ml-20">Order food online</p>
        <div className="flex flex-wrap mt-6 gap-x-20 justify-center gap-y-3 ">
          {restaurants &&
            restaurants.map((restaurant, index) => (
              <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
                <div
                  key={index}
                  className="bg-white shadow-md hover:shadow-2xl active:shadow-xl rounded-lg p-4 flex-shrink-0 w-[300px] h-[300px] mb-6"
                >
                  <img
                    src={restaurant.homeImage}
                    alt={restaurant.name}
                    className="w-full h-44 object-cover rounded-lg mb-2"
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">{restaurant.name}</p>
                    <p className="text-sm text-gray-600">
                      {restaurant.rating} ★
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <p className="w-[150px]">{restaurant.foodType}</p>
                    <p>{restaurant.avgPrice} for one</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default Restaurants;
