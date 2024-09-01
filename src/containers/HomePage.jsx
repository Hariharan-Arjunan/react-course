import React, { useEffect, useState } from "react";
import ListingList from "../components/ListingList";
import { Button } from "../components/ui/Button";
import axios from "axios";
import useFetchData from "../hooks/useFetchData";

const HomePage = () => {
  const hotels = useFetchData("http://localhost:5000/listings");
  console.log(hotels);
  // const [staticListing, setStaticListing] = useState([]);

  // const fetchListings = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/listings");
  //     console.log(response);
  //     setStaticListing(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchListings();
  // }, []);

  // function handleClick() {
  //   const filteredHotels = staticListing.filter((x) => x.country === "london");
  //   console.log(filteredHotels);
  //   setStaticListing(filteredHotels);
  // }

  return (
    <div>
      HomePage
      <div>
        <ListingList listings={hotels} />
      </div>
    </div>
  );
};

export default HomePage;
