import React from "react";
import { listings } from "../data/listings";
import ListingCard from "./ListingCard";

const ListingList = () => {
  const data = listings;
  console.log(data);
  return (
    <div>
      {data.map((hotel) => {
        return <ListingCard hotel={hotel} />;
      })}
    </div>
  );
};

export default ListingList;
