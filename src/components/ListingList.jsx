import React from "react";
import { listings } from "../data/listings";
import ListingCard from "./ListingCard";

const ListingList = () => {
  const data = listings;
  return (
    <div>
      {data.map((hotel) => {
        return <ListingCard key={hotel.name} hotel={hotel} />;
      })}
    </div>
  );
};

export default ListingList;
