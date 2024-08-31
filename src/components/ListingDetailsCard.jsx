import React from "react";
import { listings } from "../data/listings";
import { Card } from "./ui/Card";
import { useParams } from "react-router-dom";

const ListingDetailsCard = () => {
  const params = useParams();
  console.log(params);
  const data = listings.find((x) => x.id == params.listingId);
  console.log(data);

  if (!data) return <p>Hotel not found ....</p>;

  return (
    <div>
      <Card className="mx-auto p-4">
        <div>
          <h1>{data.name}</h1>
          <span>Price {data.price}</span>
          <p>Location {data.country}</p>
          <p>{data.maxGuests} Guests</p>
          <p>{data.description}</p>
        </div>
      </Card>
    </div>
  );
};

export default ListingDetailsCard;
