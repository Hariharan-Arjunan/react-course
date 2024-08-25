import React from "react";

import ListingCard from "./ListingCard";

const ListingList = ({ listings }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {listings.map((hotel) => {
        return <ListingCard hotel={hotel} />;
      })}
    </div>
  );
};

export default ListingList;
