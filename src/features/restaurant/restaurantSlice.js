import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllRestaurants,
  updateRestaurant,
  addRestaurant,
  fetchRestaurantById, // Add this import
} from "./restaurantApi";

const initialState = {
  restaurants: [],
  selectedRestaurant: null, // New state for a single restaurant
  status: "idle",
  error: null,
};

export const fetchAllRestaurantsAsync = createAsyncThunk(
  "restaurant/fetchAllRestaurants",
  async () => {
    const response = await fetchAllRestaurants();
    return response.data;
  }
);

export const updateRestaurantAsync = createAsyncThunk(
  "restaurant/updateRestaurant",
  async (update) => {
    const response = await updateRestaurant(update);
    return response.data;
  }
);

export const addRestaurantAsync = createAsyncThunk(
  "restaurant/addRestaurant",
  async (newRestaurant) => {
    const response = await addRestaurant(newRestaurant);
    return response.data;
  }
);

export const fetchRestaurantByIdAsync = createAsyncThunk(
  "restaurant/fetchRestaurantById",
  async (id) => {
    const response = await fetchRestaurantById(id); // Ensure this function is implemented
    return response.data;
  }
);

// Slice
export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRestaurantsAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllRestaurantsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.restaurants = action.payload;
      })
      .addCase(fetchAllRestaurantsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateRestaurantAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.restaurants = state.restaurants.map((restaurant) =>
          restaurant.id === action.payload.id ? action.payload : restaurant
        );
      })
      .addCase(addRestaurantAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.restaurants.push(action.payload);
      })
      .addCase(fetchRestaurantByIdAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRestaurantByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedRestaurant = action.payload;
      })
      .addCase(fetchRestaurantByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectAllRestaurants = (state) => state.restaurant.restaurants;
export const selectSelectedRestaurant = (state) =>
  state.restaurant.selectedRestaurant;
export const selectRestaurantStatus = (state) => state.restaurant.status;
export const selectRestaurantError = (state) => state.restaurant.error;

export default restaurantSlice.reducer;
