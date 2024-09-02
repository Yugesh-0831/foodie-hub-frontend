import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCartById, addCartItem, removeCartItem } from "./cartApi";

const initialState = {
  cart: null,
  status: "idle",
  error: null,
};

export const fetchCartByIdAsync = createAsyncThunk(
  "cart/fetchCartById",
  async (userId) => {
    console.log("came here: ", userId);
    const response = await fetchCartById(userId);
    console.log("camhe her and gave cart", response);
    console.log("or gave", response);
    return response;
  }
);

export const addCartItemAsync = createAsyncThunk(
  "cart/addCartItem",
  async (item) => {
    const response = await addCartItem(item);
    return response.data;
  }
);

export const removeCartItemAsync = createAsyncThunk(
  "cart/removeCartItem",
  async (item) => {
    const response = await removeCartItem(item);
    return response.data;
  }
);

// Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cart = action.payload;
      })
      .addCase(fetchCartByIdAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addCartItemAsync.fulfilled, (state, action) => {
        if (state.cart) {
          state.cart.items.push(action.payload);
        }
      })
      .addCase(removeCartItemAsync.fulfilled, (state, action) => {
        if (state.cart) {
          state.cart.items = state.cart.items.filter(
            (item) => item.foodItemId !== action.payload.foodItemId
          );
        }
      });
  },
});

// Selectors
export const selectCart = (state) => state.cart.cart;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartError = (state) => state.cart.error;

export default cartSlice.reducer;
