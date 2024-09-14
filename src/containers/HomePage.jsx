import React, { useEffect, useState } from "react";
import ListingList from "../components/ListingList";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import useFetchData from "../hooks/useFetchData";

const HomePage = () => {
  // const hotels = useFetchData("http://localhost:5000/listings");
  // console.log(hotels);
  const [hotels, setHotels] = useState([]);
  const [staticListing, setStaticListing] = useState([]);
  const [place, setPlace] = useState("");
  const [guest, setGuests] = useState(0);

  const fetchListings = async () => {
    try {
      const response = await axios.get("http://localhost:5000/listings");
      console.log(response);
      setStaticListing(response.data);
      setHotels(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  function handleClick() {
    console.log(place);
    const filteredHotels = hotels.filter((x) => x.country === place);
    console.log(filteredHotels);
    setStaticListing(filteredHotels);
  }

  return (
    <div>
      HomePage
      <div className="m-2 flex gap-2">
        <Input
          onChange={(e) => setPlace(e.target.value)}
          className="w-[200px]"
        />
        <Input
          onChange={(e) => setPlace(e.target.value)}
          className="w-[200px]"
        />
        <Button onClick={handleClick}>Search</Button>
      </div>
      <div>
        <ListingList listings={staticListing} />
      </div>
    </div>
  );
};

export default HomePage;
