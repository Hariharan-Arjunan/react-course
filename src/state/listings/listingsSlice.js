import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  listings: [],
  favouriteListingIds: [],
  error: null,
  status: "idle",
};

const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    addFavouriteListing: (state, action) => {
      state.favouriteListingIds.push(action.payload);
    },
    removeFavouriteListing: (state, action) => {
      state.favouriteListingIds = state.favouriteListingIds.filter(
        (id) => id !== action.payload
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchListings.fulfilled, (state, action) => {
      state.status = "Success";
      state.listings = action.payload;
    });
  },
});

export const fetchListings = createAsyncThunk(
  "listings/fetchListings",
  async () => {
    const response = await axios.get("http://localhost:5000/listings");
    return response.data;
  }
);

export const { addFavouriteListing, removeFavouriteListing } =
  listingsSlice.actions;

export default listingsSlice.reducer;
