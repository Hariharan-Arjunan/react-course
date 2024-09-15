import React, { useEffect, useState } from "react";
import ListingList from "../components/ListingList";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { fetchListings } from "../state/listings/listingsSlice";
import useFetchData from "../hooks/useFetchData";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

// Store data access - useSelector
// Store data action - useDispatch

const HomePage = () => {
  const { token } = useAuth();
  const { listings, error, status, favouriteListingIds } = useSelector(
    (state) => state.listings
  );
  console.log(token);
  const dispatch = useDispatch();

  // function handleClick() {
  //   console.log(place);
  //   const filteredHotels = hotels.filter((x) => x.country === place);
  //   console.log(filteredHotels);
  //   setStaticListing(filteredHotels);
  // }

  useEffect(() => {
    if (listings.length === 0) {
      dispatch(fetchListings());
    }
  }, [listings]);

  return (
    <div>
      HomePage
      <br />
      <Link to={`/favourite`}>Favourite</Link>
      <div className="m-2 flex gap-2">
        <Input
          // onChange={(e) => setPlace(e.target.value)}
          className="w-[200px]"
        />
        <Input
          // onChange={(e) => setPlace(e.target.value)}
          className="w-[200px]"
        />
        <Button onClick={() => {}}>Search</Button>
      </div>
      <div>
        <ListingList listings={listings} />
      </div>
    </div>
  );
};

export default HomePage;
